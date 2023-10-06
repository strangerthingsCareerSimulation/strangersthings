import React from "react";

function Login() {
  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          {/* Labels and inputs for form data */}
          <label className="label">User Name</label>
          <input
            className="input"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
          />

          <label className="label">Password</label>
          <input
            className="input"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
