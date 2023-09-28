import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const { email } = useParams();
  const [product, setProduct] = useState({
    id: "",
    name: "",
    catagory: "",
    specification: "",
    ratings: "",
    price: "",
  });
  const { id, name, catagory, specification, ratings, price } = product;
  const change = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    const result = await axios.post(
      "http://localhost:8080/products/addproduct",
      product
    );
    // setProduct(product)
    navigate(`/adminhome/${email}`);
  };
  return (
    <div className="container-fluid">
      <form action="" className="form-control m-4">
        <h2 className="text-center">Update Product details</h2>

        <input
          className="form-control px-1 m-2"
          type="text"
          name="id"
          value={id}
          onChange={change}
          placeholder="Enter product id"
        />

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
        <input
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
          Add Product
        </button>
        <Link className="btn bg-danger text-light mx-2" to={`/adminhome/${email}`}>
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default AddProduct;
