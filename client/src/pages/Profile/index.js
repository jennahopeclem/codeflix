import { useQuery } from "@apollo/client";
import React from "react";
import Nav from "../../components/utils/nav";
import { QUERY_USER } from "../../utils/queries";



const ProfilePage = ({userId}) => {

  
  const myUserData = useQuery(QUERY_USER, {
    // pass URL parameter
    variables: { userId: userId },
  });

  if(myUserData.loading) return(<div>Loading...</div>)
  const userData = myUserData.data.user;

  return (
    <div className="h-screen w-screen">
      <Nav />
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="h-1/2 flex flex-row w-full bg-gray-200 rounded-t-md mb-2 shadow-lg p-8">
          <div className="flex flex-col items-center justify-center w-1/3">
            <img
              className="h-32 w-32 rounded-full object-cover mb-4"
              src="/images/profilePic.jpg"
              alt="Profile"
            />
            <h2 className="text-xl font-medium">{userData.username}</h2>
            <p className="text-gray-500">
            {userData.specialty
              ? userData.specialty 
              : "Wandering Space Cat"}</p>
          </div>
          <div className="flex flex-col items-center justify-center w-2/3">
            <h2 className="text-xl font-medium mb-4">About Me</h2>
            
                {userData.about
                 ? userData.about
                 : <textarea
              className="w-full h-64 border rounded-lg p-2 text-gray-700"
              placeholder="Write something about yourself...">  
              </textarea>
              }
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-1/4 bg-gray-200 rounded-t-md mb-2 shadow-lg p-8">
          <div className="flex flex-row justify-center space-x-10 w-screen">
            <div className="w-40 h-40 bg-white rounded-lg" />
            <div className="w-40 h-40 bg-white rounded-lg" />
            <div className="w-40 h-40 bg-white rounded-lg" />
            <div className="w-40 h-40 bg-white rounded-lg" />
            <div className="w-40 h-40 bg-white rounded-lg" />
          </div>
        </div>

        <div className="h-1/4 w-full bg-gray-200 rounded-b-md mt-2">
        {userData.endorsements
              ? userData.endorsements 
              : "Write stuffs here"}
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
