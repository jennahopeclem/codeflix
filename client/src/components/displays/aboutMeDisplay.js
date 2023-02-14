import React from 'react';

function AboutMe(userData) {
    
    return (
        <div className="flex justify-center">
            <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
                <p className="">{userData.userData.name}</p>
            </div>
            </div>
            <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
                <label htmlFor="aboutMe" className="form-label inline-block mb-2 text-gray-700"
                >About me:</label>
                <p className="">{userData.userData.text}</p>
            </div>
            </div>
        </div>
    )};

export default AboutMe;