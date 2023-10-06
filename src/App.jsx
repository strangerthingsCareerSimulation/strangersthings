import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'


function App() {
 
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/allposts">All Posts</Link>
      </div>
    </>
  );
}

export default App
