import "./index.css";
import Nav from '../../components/utils/nav'
import { useQuery } from "@apollo/client";
import { QUERY_MY_PROJECT } from "../../utils/queries";

function Project(userId) {


  let userProject = useQuery(QUERY_MY_PROJECT, {
    variables: { userId: userId.userId },
  })
  console.log('my project: ', userProject)

  if(userProject.loading) { return ( <> <div>Loading...</div></>)}
  userProject = userProject.data.myProject;


  return (
    <div className="h-screen w-screen">
      <Nav />
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="h-1/2 flex flex-row w-full bg-gray-200 rounded-t-md mb-2 shadow-lg p-8">
          <div className="flex flex-col items-center justify-center w-1/3">
            <img
              className="h-32 w-32 rounded-full object-cover mb-4"
              src={userProject.thumbnail}
              alt="Profile"
            />
            <h2 className="text-xl font-medium">{userProject.name}</h2>
            <p className="text-gray-500">
            {userProject.complete
              ? userProject.complete 
              : "Wandering Space Cat"}</p>
          </div>
          <div className="flex flex-col items-center justify-center w-2/3">
            <h2 className="text-xl font-medium mb-4">Our project:</h2>
            
                {userProject.description
                 ? userProject.description
                 : <textarea
              className="w-full h-64 border rounded-lg p-2 text-gray-700"
              placeholder="Write something about yourself...">  
              </textarea>
              }
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-1/4 bg-gray-200 rounded-t-md mb-2 shadow-lg p-8">
          <div className="flex flex-row justify-center space-x-10 w-screen">
           {userProject.users.map((user) => (
              <div className="w-40 h-40 bg-white rounded-lg">
                <img src={user.profile_pic}></img>
              </div>
           ))}
 
          </div>
        </div>

        <div className="h-1/4 w-full bg-gray-200 rounded-b-md mt-2">
        {userProject.looking_for
              ? userProject.looking_for 
              : "Looking for to be added here"}
        </div>
      </div>
    </div>
  );
}

export default Project;
