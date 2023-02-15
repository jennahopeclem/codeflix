import { gql } from '@apollo/client';


// Uncertain if mutators are needed.  Use the ref below 
// to create any mutators as need arises
// Used in conjunction with useMutation() in pages/components

// reference from : 21-MERN\01-Activities\28-Stu_Mini-Project\Main\client\src\utils\mutations.js
// ===================================================================
// =============  BEGIN REFERENCE  ===========================================

export const CREATE_USER = gql`
mutation createUser($userId: ID!) {
    deleteUser(userId: $userId) {
      _id
    }
  }
`;

// export const CREATE_VOTE = gql`
//   mutation createVote($_id: String!, $techNum: Int!) {
//     createVote(_id: $_id, techNum: $techNum) {
//       _id
//       tech1
//       tech2
//       tech1_votes
//       tech2_votes
//     }
//   }
// `;


// ===================================================================
// =============  END REFERENCE  ===========================================
