import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import UserContext from "../../context/UserContext";

const UpdateProduct = () => {
  const { id } = useParams();
  const {users} = useContext(UserContext);
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    catagory: "",
    specification: "",
    ratings: "",
    price: "",
  });

  useEffect(()=>{
    loadData()
  },[])
  const { name, catagory, specification, ratings, price } = product;
  const change = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const loadData=async()=>{
    const result = await axios.get(`http://localhost:8080/products/get/${id}`)
    setProduct(result.data)
  }
  const submit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:8080/products/update/${id}`,
      product
    );
    // navigate(`/adminhome/${email}`)
    navigate(`/adminhome/${users}`);
  };

  return (
    <div className="container-fluid">
      <form action="" className="form-control m-4">
        <h2 className="text-center">Update Product details</h2>
   
        <input
          className="form-control px-1 m-2"
          type="text"
          name="name"
          value={name}
          onChange={change}
          placeholder="Enter product name"
        />
        <input
          className="form-control px-1 m-2"
          type="text"
          name="catagory"
          value={catagory}
          onChange={change}
          placeholder="Enter product catagory"
        />
        <textarea
          className="form-control px-1 m-2"
          type="text"
          name="specification"
          value={specification}
          onChange={change}
          placeholder="Enter product specification"
        />
        <input
          className="form-control px-1 m-2"
          type="text"
          name="ratings"
          value={ratings}
          onChange={change}
          placeholder="Enter product ratings"
        />
        <input
          className="form-control px-1 m-2"
          type="text"
          name="price"
          value={price}
          onChange={change}
          placeholder="Enter product price"
        />
        <button className="btn bg-success text-light mx-2" onClick={submit}>
          Update
        </button>
        <Link className="btn bg-warning text-light mx-2" to='/adminhome'>
        Cancel
      </Link>
      
      </form>
    </div>
  );
};

export default UpdateProduct;
