import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Home = () => {
  const [user,setUSer]=useState([])

  useEffect(()=>{
    loadData()
  },[])

  const loadData=async()=>{
    const result= await axios.get('http://localhost:8080/student/get')
    setUSer(result.data)
  }

  // const deleteData=async(id)=>{
  //   await axios.delete(`http://localhost:8080/user/delete/${id}`)
  //   loadData()
  // }
  return (
    <div className='container-fluid'>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">User ID</th>
      <th scope="col">Name</th>
      <th scope="col">email</th>
      <th scope="col">password</th>
      {/**
      <th scope="col">Age</th>
      <th scope="col">Action</th>
    */}
    </tr>
  </thead>
  <tbody>
  
  {
    user.map((u,index)=>{
      return (
        <tr>
      <th scope="row" key={index}>{u.id}</th>
      <td>{u.name}</td>
      <td>{u.email}</td>
      <td>{u.password}</td>
      <td>
      {/**
      <Link to={`/get/${u.userid}`} className='btn btn-info mx-1'>View</Link>
      <Link to={`/update/${u.userid}`} className='btn btn-success mx-1'>Edit</Link>
    <button className='btn btn-danger mx-1' onClick={()=>deleteData(u.userid)}>Delete</button>
  
  */}
      </td>
    </tr>
      )
    })
  }
   
  </tbody>
</table></div>
  )
}

export default Home