import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });
  const { id, name, email, password } = user;
  const change = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:8080/student/add`, user)
      .then(() => {
        setError("user register successful");
        navigate('/login')
      })
      .catch(() => setError("Invalid credentials"));
  };
  return (
    <div className="container">
      <h2 style={{ color: "green" }}>{error}</h2>
      <form className="my-5">
        <h1>Registration Form</h1>
        <label htmlFor="id">User ID</label>
        <input
          type="text"
          className="form-control"
          name="id"
          value={id}
          onChange={change}
          id="id"
          required
        />
        <label htmlFor="password">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={change}
          id="name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={change}
          id="email"
          required
        />
        <label htmlFor="name">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={change}
          id="password"
          required
        />
        <button className="btn btn-dark my-4" onClick={submit}>
          Submit
        </button>
        <div></div>
        <Link to="/login">Already have an account?Login</Link>
      </form>
    </div>
  );
};

export default Signup;
