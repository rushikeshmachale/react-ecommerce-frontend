import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {
  const navigate = useNavigate()
  const [user,setUser] = useState({
    name:"",
    city:"",
    mobile:"",
    age:""
  })

  const {userid,name,city,mobile,age}=user

  useEffect(()=>{
    loadData();
  },[])


  const onChange=(e)=>{
    e.preventDefault();
    setUser({...user,[e.target.name]:e.target.value})
  }

  let {id}= useParams()
  const loadData=async()=>{
    let result = await axios.get(`http://localhost:8080/user/find/${id}`)

    setUser(result.data);
  }

  const submit=async()=>{
    await axios.put(`http://localhost:8080/user/update/${id}`,user)
    navigate('/')
  }
  return (
    <div className="container">
      <div className="row">
    
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
  )
}

export default UpdateUser