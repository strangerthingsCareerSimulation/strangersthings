import React, { useState } from "react";

const COHORT_NAME = "2302-acc-pt-web-pt-b";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const registerUser = async (data) => {
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: data }),
      });
      const result = await response.json();

      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = registerUser(formData);
  console.log(result)};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <h1>Signup</h1>
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

export default Signup;
