import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const onchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8080/student/login", user)
      .then(() => {
        // setError("login successful");
        navigate('/home')
      })
      .catch(() => setError("Invalid credentials"));
  };
  return (
    <div className="container">
      <h2 style={{ color: "green" }}>{error}</h2>
      <form className="my-5" typeof="submit">
        <h1>Login Form</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={onchange}
          id="email"
          required
        />
        <label htmlFor="name">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={onchange}
          id="password"
          required
        />
        <button className="btn btn-dark my-4" onClick={submit}>
          {" "}
          Submit
        </button>
        <div>
          <Link to="/">Don't have an account?Create account</Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;
