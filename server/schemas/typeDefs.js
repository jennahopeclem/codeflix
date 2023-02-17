const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Endorsement {
    user_id: ID!
    specialty: String!
    rating: Int!
    body: String!
  }

  type User {
    _id: ID!
    username: String
    github: String
    linkedin: String
    email: String
    password: String
    about: String
    profile_pic: String
    specialty: String
    endorsements: [Endorsement]
  }

  type Recruitment {
    is_looking: Boolean!
    num_recruits: Int
    specialty: String!
    description: String
  }

  type Project {
    _id: ID!
    name: String!
    description: String
    looking_for: [Recruitment]
    users: [User]!
    complete: Boolean
    thumbnail: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    allUsers: [User]!
    user(userId: ID!): User
    allProjects: [Project]!
    project(projectId: ID!): Project
    myProject(userId: ID!): Project
    allRecruitments: [Recruitment]!
    recruitment(recruitmentId: ID!): Recruitment
    allEndorsements: [Endorsement]
    endorsement(endorsementId: ID!): Endorsement
  }

  type Mutation {
    login(
      email: String!,
      password: String!
      ): Auth

    createUser(
      username: String!
      github: String
      linkedin: String
      email: String!
      password: String!
      about: String
      profile_pic: String
      specialty: String
    ): Auth

    updateUser(
      userId: ID!
      username: String
      github: String
      linkedin: String
      email: String
      about: String
      profile_pic: String
      specialty: String
    ): Auth

    deleteUser(userId: ID!): Auth

    createProject(
      name: String!
      description: String
      complete: Boolean
    ): Project!
    
    updateProject(
      projectId: ID!
      name: String
      description: String
      complete: Boolean
      thumbnail: String
      users: [ID]
    ): Project!
    deleteProject(projectId: ID!): Project!

    createRecruitment(
      projectId: ID!
      is_looking: Boolean!
      num_recruits: Int
      specialty: String!
      description: String
    ): Recruitment!
    updateRecruitment(
      id: ID!
      is_looking: Boolean!
      num_recruits: Int
      specialty: String!
      description: String
    ): Recruitment!
    deleteRecruitment(id: ID!): Recruitment!

    createEndorsement(
      user_id: ID!
      specialty: String!
      rating: Int!
      body: String!
    ): Endorsement!
    updateEndorsement(
      id: ID!
      user_id: ID!
      specialty: String!
      rating: Int!
      body: String!
    ): Endorsement!
    deleteEndorsement(id: ID!): Endorsement!
  }
`;

module.exports = typeDefs;

// cant get inputs types to work
//
// endorsements and reactions should be pushed into the array on creation
// input EndorsementInput {
//     specialty: String!
//     rating: Int!
//     body: String!
//   }
//   input UserInput {
//     name: String
//     github: String
//     linkedin: String
//     email: String
//     about: String
//     profile_pic: String
//     specialty: String
//     endorsements: [EndorsementInput]
//   }
//   input RecruitmentInput {
//     is_looking: Boolean!
//     num_recruits: Int
//     specialty: String!
//     description: String
//   }
//   input ProjectInput {
//     name: String!
//     description: String
//     looking_for: [RecruitmentInput]
//     users: [UserInput]!
//     complete: Boolean
//   }
