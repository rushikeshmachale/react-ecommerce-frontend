import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewProduct = () => {
  const {id} = useParams()

  const [prod,setProd]=useState({
    name: "",
    catagory: "",
    specification: "",
    ratings: "",
    price: "",
  })
  useEffect(()=>{
    loadData();
  })

  const loadData=async(e)=>{
    const result = await axios.get(`http://localhost:8080/products/get/${id}`)
    setProd(result.data)
  }
  return (
    <div className='container'>
        <div className="row m-5">
        <div className="card">
        <div className="card-text">
        <b>productId : </b> {prod.id}
        </div>
        
        <div className="card-text">
        <b> Name :</b> {prod.name}
        </div>
        <div className="card-text">
        <b>catagory : </b> {prod.catagory}
        </div>
        
        <div className="card-text">
        <b> Specification :</b> {prod.specification}
        </div>
        <div className="card-text">
        <b>Ratings : </b> {prod.ratings}
        </div>

        <div className="card-text">
        <b> Price :</b> ${prod.price}
                </div>
                
                </div>
                <Link to='/adminhome' className='btn btn-primary my-2'>Home</Link>
                </div>
                </div>
                )
              }
              
              export default ViewProduct