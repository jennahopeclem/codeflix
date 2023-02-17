import decode from "jwt-decode";

class AuthService {
  getProfile() {
    try{    
      console.log('im in getProfile')
      return decode(this.getToken());}
      catch(err) {
        console.log('this error is in idEsxpired', err, err.message)
      }

  }

  loggedIn() {
    try{
    console.log('im in loggedIn')
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
    }catch(err) {
      console.log('this error is in idEsxpired', err, err.message)
    }
  }

  isTokenExpired(token) {
    console.log('im in isExpired')
    try{   
      let decoded;
      token
        ? decoded = decode(token)
        : decoded = false;
      
      if(!decoded){
          return false;
      }
      if (decoded.exp < Date.now() / 1000) {
          localStorage.removeItem("id_token");
          return true;
    }
}
    catch(err) {
      console.log('this error is in isExpired', err, err.message);
      return false;
    }

  }

  getToken() {
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }

  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

export default new AuthService();

// import decode from 'jwt-decode';

// class AuthService {
//   getProfile() {
//     return decode(this.getToken());
//   }

//   loggedIn() {
//     const token = this.getToken();
//     // If there is a token and it's not expired, return `true`
//     return token && !this.isTokenExpired(token) ? true : false;
//   }

//   isTokenExpired(token) {
//     // Decode the token to get its expiration time that was set by the server
//     const decoded = decode(token);
//     // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
//     if (decoded.exp < Date.now() / 1000) {
//       localStorage.removeItem('id_token');
//       window.location.assign('/');
//       return true;
//     }
//     // If token hasn't passed its expiration time, return `false`
//     return false;
//   }

//   getToken() {
//     return localStorage.getItem('id_token');
//   }

//   login(idToken) {
//     localStorage.setItem('id_token', idToken);
//     window.location.assign('/');
//   }

//   logout() {
//     localStorage.removeItem('id_token');
//     window.location.assign('/');
//   }
// }

// export default new AuthService();
