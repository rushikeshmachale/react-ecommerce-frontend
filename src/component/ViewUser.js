import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewUser = () => {
  const [user,setUser]=useState({
    userid:"",
    name:"",
    city:"",
    mobile:"",
    age:""
  })
  useEffect(()=>{
    loadData()
  },[])
  const {id} = useParams()
  const loadData = async()=>{
    const result=await axios.get(`http://localhost:8080/user/find/${id}`)
    setUser(result.data)
  }
  return (
    <div>
      <div className="card">
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
          <div className="card-item">
            <b>userid : {user.userid}</b>
          </div>
        </div>
        <div className="card-body">
          <b>name : {user.name}</b>
        </div>
        <div className="card-body">
          <b>city : {user.city}</b>
        </div>
        <div className="card-body">
          <b>mobile : {user.mobile}</b>
        </div>
        <div className="card-body">
          <b>age : {user.age}</b>
        </div>
        <Link to='/' className="btn btn-outline-info">Home</Link>
      </div>
    </div>
  );
};

export default ViewUser;
