const { Project, User } = require('../models');

const resolvers = {

// ref from 21-MERN\01-Activities\28-Stu_Mini-Project\Main\server\schemas\resolvers.js

  Query: {
    allUsers: async () => {
      return User.find({});
    },
    allProjects: async () => {
        return Project.find({});
    },
    user: async (parent, { userId }) => {
       return User.findOne({ _id: userId});
    },
    project: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Project.find(params);
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const newUser = await User.create(args);
      return newUser;
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

    createProject: async (parent, args) => {
      const newProject = await Project.create(args);
      return newProject;
    },


  },
};

module.exports = resolvers;