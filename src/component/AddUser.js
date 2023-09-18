import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate()
  const [user,setUser]=useState({
    userid:"",
    name:"",
    city:"",
    mobile:"",
    age:""
  })
  const {userid,name,city,mobile,age}=user;

  const onChange=(e)=>{

    setUser({...user,[e.target.name]:e.target.value})
  }
  const submit=async(e)=>{
    e.preventDefault()
    await axios.post('http://localhost:8080/user/add',user)

    navigate('/')

  }
  return (
    <div className="container">
      <div className="row">
        <input
          type="text"
          className="form-control my-2"
          placeholder="Enter your userid"
          name="userid"
          value={userid}
          onChange={onChange}
        />
        <input
          type="text"
          className="form-control my-2"
          placeholder="Enter your name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          type="text"
          className="form-control my-2"
          placeholder="Enter your city"
          name="city"
          value={city}
          onChange={onChange}
        />
        <input
          type="text"
          className="form-control my-2"
          placeholder="Enter your mobile"
          name="mobile"
          value={mobile}
          onChange={onChange}
        />
        <input
          type="text"
          className="form-control my-2"
          placeholder="Enter your age"
          name="age"
          value={age}
          onChange={onChange}
        />
        <button className="btn btn-info" onClick={submit}>Submit</button>
      </div>
    </div>
  );
};

export default AddUser;
