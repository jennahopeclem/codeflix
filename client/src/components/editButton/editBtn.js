import React from 'react';

const EditBtn = ({onClick}) => 
    (
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={onClick}>
        <span>Edit</span>
        </button>
    )


export default EditBtn;

// how to call this button:

//   <EditBtn onClick={toggleEditMode}/> in the display render
//
//   <EditBtn onClick={submitEdit}/>     in the form render

// where toggleEditMode is defined in the parent page as: 

// const [editMode, setEditMode] = useState(false);

// function toggleEditMode() {
//     setEditMode(!editMode);
// };