import React from 'react';

function AboutMeForm({onClick}) {
    
    return (
        <div className="flex justify-center">
            <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
                <label htmlFor="name" className="form-label inline-block mb-2 text-gray-700"
                >Name</label>
                <textarea
                className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="name"
                rows="1"
                placeholder="name"
                ></textarea>
            </div>
            </div>
            <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
                <label htmlFor="aboutMe" className="form-label inline-block mb-2 text-gray-700"
                >About me</label>
                <textarea
                className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="aboutMe"
                rows="5"
                ></textarea>
                <button onClick={onClick}>Submit changes</button>
            </div>
            </div>
        </div>
    )};

export default AboutMeForm;