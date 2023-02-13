// REFERENCE: 21-MERN\01-Activities\28-Stu_Mini-Project\Develop\client\src\utils\api.js

// add functions here for fetch requests to server
// funcs here relate to server/routes/api

// Ex:

// export const getAllMatchups = () => {
//     return fetch('/api/matchup', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   };

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  export function checkPassword(input) {
    const passw = /^[A-Za-z]\w{7,14}$/;
    if (input.match(passw)) {
      return true;
    }
    return false;
  }
  

