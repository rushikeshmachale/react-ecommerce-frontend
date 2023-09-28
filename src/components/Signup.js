import React, { useState } from "react";
import   axios from "axios";
import { Link } from "react-router-dom";
const Signup = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });
  const [error,setError]=useState("")
  const {id,name,email,password}=user;
  const onchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    const result = await axios.post('http://localhost:8080/customers/add',user)
    .then(()=>setError("Customer added successful"))
    .catch(()=>setError("Customer already exists"))
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
    <div className="d-flex justify-content-center align-items-center" style={myStyle}>
    {/**
    <div style={{display:"flex",alignItems:"center",height:"100vh",width:"100vw",backgroundColor:"gray"}}>
   */} 
   <form className="form-control opacity-100 d-flex flex-column card my-3 h-auto p-4 w-50" style={formStyle}>
   <div>
   <button className="btn btn-primary w-25 float-end" onClick={btnClick}>{btn}</button>
   </div>
   {error==="Customer added successful"?(<span className="text-center text-success m-1 ">{error}</span>):(<span className="text-center text-danger m-1 ">{error}</span>)}
   
        <h2 className="text-center">Register</h2>
        <label htmlFor="id" className="form-label">
          ID
        </label>
        <input
          type="text"
          name="id"
          value={id}
          onChange={onchange}
          className="form-control"
          id="id"
          required
        />
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          onChange={onchange}
          value={name}
          className="form-control"
          id="name"
          required
        />
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
        <button className="btn btn-primary my-2" onClick={submit}>
          Submit
        </button>
        <Link className="text-decoration-none" to='/'>Already have an account? Login</Link>
        </form>
        </div>
  )
}

export default Signup