import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Project from "./pages/Project";
import Splash from "./pages/Splash";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import { useState } from "react";
import Auth from './utils/auth'

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [page, setPage] = useState(() => {
    return <Splash />;
  });
  const myTimeout = setTimeout(loadHome, 3000);

  function loadHome() {
    setPage(<Home />);
  }

  let userId;
  
  !Auth.isTokenExpired()
      ? userId = Auth.getProfile().data._id
      : userId = null;

      console.log('userId: ', userId)


  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route path="/" element={page} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} onEnter={() => Auth.logout} />
            <Route path="/project" element={<Project />} />
            <Route path="/profile" element={<Profile userId={userId}/>} />
            <Route path="/splash" element={page} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
