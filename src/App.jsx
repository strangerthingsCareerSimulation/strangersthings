import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'


function App() {
  //  const authToken this should be null
  // function called handle auth it should take a token should set auth token
  // singup link should pass a handle auth to signup
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/allposts">All Posts</Link>
        <Link to="/createPost">Create Posts</Link>
        {/* you should pass the auth token as a prop */}
      </div>
    </>
  );
}

export default App
