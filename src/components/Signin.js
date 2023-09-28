import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import UserContext from "../context/UserContext";

const Signin = () => {
  
  // const [catagory, setCatagory] = useState('');
  let catagory=''
  const navigate = useNavigate();
  const [username,setUsername] = useState('')
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { email, password } = user;
  const onchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const change=(e)=>{
    catagory = e.target.value
      // setCatagory({[e.target.name]:e.target.value})
  }

  const {setUsers} = useContext(UserContext)
  
  const submit = async (e) => {
    e.preventDefault();
    // setCatagory(catagory)
    if (catagory === 'admin') {
      await axios
      .post("http://localhost:8080/admin/login", user)
      .then(() => {
        // navigate(`/adminhome/${email}`);
        setUsers({ email})
        navigate(`/adminhome/${email}`);
      })
      .catch(() => setError("Invalid credentials"));
    }
    if (catagory === "customer") {
      await axios
      .post("http://localhost:8080/customers/login", user)
      .then(() => {
        setUsers({ email})
        navigate(`/home/${email}`);
      })
      .catch(() => setError("Employee not found"));
    }
  };
  let [myStyle,setMyStyle]=useState({backgroundColor:"black",
  height:"100vh"})

  let [formStyle,setFormStyle]=useState({backgroundColor:"white"})

  const [btn,setBtn]=useState('dark');

  const btnClick=()=>{
    if(btn==='dark'){
      setBtn('light')
      setMyStyle({backgroundColor:"white",
      height:"100vh"})
      setFormStyle({color:"white",backgroundColor:"black"})
    
  }else{
    setBtn('dark')
    setMyStyle({backgroundColor:"black",
    height:"100vh"})
    setFormStyle({color:"black",backgroundColor:"white"})
    }
  }
  return (
    <div className="d-flex justify-content-center align-items-center " style={myStyle}>
    {/**
    <div style={{display:"flex",alignItems:"center",height:"100vh",width:"100vw",backgroundColor:"gray"}}>
   */} 
   <form className="form-control opacity-100 d-flex flex-column card my-3 h-auto p-4 w-50" style={formStyle}>
   <div>
   <button className="btn btn-primary w-25 float-end" onClick={btnClick}>{btn}</button>
   </div>
   <span className="text-center text-danger m-1 ">{error}</span>
        <h2 className="text-center">Login</h2>

        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          onChange={onchange}
          value={email}
          className="form-control"
          id="email"
          required
        />
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          onChange={onchange}
          value={password}
          className="form-control"
          id="password"
          required
        />
        <label htmlFor="password" className="form-label">
          Catagory
        </label>
        <div>
          <select className="form-select" onChange={change} name="" id="">
            <option value="type">
              select type
            </option>
            <option name="admin" value="admin">admin</option>
            <option name="customer" value="customer">customer</option>
          </select>
        </div>

        <button className="btn btn-primary my-2" onClick={submit}>
          Submit
        </button>
        <Link className="text-decoration-none" to="/signup">Don't' have an account? Register</Link>
      </form>
    </div>
  );
};

export default Signin;
