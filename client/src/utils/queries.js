import { gql } from '@apollo/client';

// Exports to be used with useQuery() in components/pages
export const QUERY_ALL_USERS = gql`
  query findAllUsers {
  allUsers {
    _id
    username
    github
    linkedin
    email
    about
    profile_pic
    specialty
    endorsements {
      user_id
      specialty
      rating
      body
    }
  }
}`;

export const QUERY_USER = gql`
query findOneUser($userId: ID!) {
    user(userId: $userId) {
      email
      about
      endorsements {
        rating
        body
        specialty
        user_id
      }
      github
      linkedin
      username
      profile_pic
      specialty
      _id
    }
  }
`;

export const QUERY_ALL_PROJECTS = gql`
query findAllProjects {
    allProjects {
      name
      description
      looking_for {
        is_looking
        num_recruits
        specialty
        description
      }
      complete
      _id
    }
  }
`;

export const QUERY_PROJECT = gql`
query findOneProject($projectId: ID!) {
    project(projectId: $projectId) {
      _id
      name
      complete
      description
      looking_for {
        is_looking
        num_recruits
        specialty
        description
      }
      users {
        username
        profile_pic
        specialty
      }
    }
  }
  `;



// ======================  Example Page Using Query =========================

// import "./index.css";
// import { useQuery } from '@apollo/client';
// import { QUERY_ALL_PROJECTS } from "../../utils/queries";


//   function Home() {

//     const { loading, data }  = useQuery(QUERY_ALL_PROJECTS, {
//       fetchPolicy: "no-cache"
//     });
  
//     if(loading) {
//           return (
//         <>
//           <div>This is the homepage, no data found</div>
//         </>
//       )
//     }
  
//     console.log('data: ', data);
//     console.log('allProjects: ', data.allProjects);
//     console.log('name: ', data.allProjects[0].name);
//     console.log('desc: ', data.allProjects[0].description);
//     console.log('complete: ', data.allProjects[0].complete);
//     console.log('users: ', data.allProjects[0].users);
  
  
//     return (
//       <>
//         <div style={{color: "white"}}>This is Homepage</div>
//         <p style={{color: "white"}}> Project Name {data.allProjects[0].name}</p>
//         <p style={{color: "white"}}> Project description {data.allProjects[0].description}</p>
//         <p style={{color: "white"}}> Project {data.allProjects[0].complete? 'complete' : 'not complete'}</p>
//         <p style={{color: "white"}}> Project users {data.allProjects[0].users || 'none'}</p>
  
  
//       </>
//     );
//   }

// =================  End Example  =================================================
