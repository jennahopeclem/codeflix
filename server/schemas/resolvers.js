const { Project, User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    
    allUsers: async () => {
      return User.find({}).populate('endorsements');
    },
    user: async (parent, { userId }) => {
       return User.findOne({ _id: userId}).populate('endorsements');
    },
    allProjects: async () => {
        return Project.find({}).populate('looking_for');
    },
    project: async (parent, { projectId }) => {
      return Project.findOne({ _id: projectId }).populate('looking_for');
    },
    myProject: async (parent, { userId }) => {
      return Project.findOne(
        {$match: {'users._id': userId}}
      );
    },
    allRecruitments: async () => {
        return Project.find({$unwind: "looking_for"});
    }
  },
  Mutation: {
// ======================================================
// ================ Begin User Mutations ================
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args) => {

        const updateUser = await User.findOneAndUpdate(
        { _id: args.userId },
        { $set: args },
        { new: true }
      );
        if (!updateUser) {
            throw new Error('User with this ID not found.')
        }
        return updateUser;
    },

    deleteUser: async (parent, { userId }) => {
        return await User.findOneAndDelete({ _id: userId });
      },

// ======================================================
// =============== End User Mutations ===================
// ======================================================
// ============= Begin Project Mutations ================

    createProject: async (parent, args) => {
      const newProject = await Project.create(args);
      return newProject;
    },

    updateProject: async (parent, args) => {
        const updateProject = await Project.findOneAndUpdate(
        { _id: args.projectId },
        { $set: args },
        { new: true }
      );
        if (!updateProject) {
            throw new Error('Project with this ID not found.')
        }
        return updateProject;
    },

    deleteProject: async (parent, { projectId }) => {
        return await Project.findOneAndDelete({ _id: projectId });
      },
// ======================================================
// =============== End Project Mutations ================
// ======================================================
// ============= Begin Recruitment Mutations ============
  
//   createRecruitment: async (parent, args) => {
//     return await Project.findOne(
//         { _id: args.projectId },
//         {$push: {is_looking: {args}} },
//         {new: true}
//         );
//   },

//   updateProject: async (parent, args) => {
//       const updateProject = await Project.findOneAndUpdate(
//       { _id: args.projectId },
//       { $set: args },
//       { new: true }
//     );
//       if (!updateProject) {
//           throw new Error('Project with this ID not found.')
//       }
//       return updateProject;
//   },

//   deleteProject: async (parent, { projectId }) => {
//       return await Project.findOneAndDelete({ _id: projectId });
//     },
  },
};

module.exports = resolvers;