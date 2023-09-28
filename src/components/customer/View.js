import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserContext from "../../context/UserContext";

function View({ item }) {
  const { id } = useParams();
  const {userid} = useContext(UserContext)
  const navigate = useNavigate()
  const [product, setProduct] = useState({

    name: "",
    catagory: "",
    specification: "",
    ratings: "",
    price: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const [msg, setMsg] = useState("");
  const loadData = async () => {
    let result = await axios.get(`http://localhost:8080/products/get/${id}`);
    setProduct(result.data);
  };
  const { name, catagory, price } = product;
  const addToCart = async (e) => {
    e.preventDefault();
    const result = await axios
      .post(`http://localhost:8080/cart/add`, {
        pid:id,
        customerId: userid,
        pname: name,
        pcatagory: catagory,
        price: price,
      })
      .then(() => {
        setMsg("product added to cart");
        navigate(`/cart/${id}`)
      })
      .catch(() => setMsg("error while adding to cart"));
  };

  const addToOrders=async(e)=>{
    e.preventDefault();
    const result = await axios.post(`http://localhost:8080/orders/add`,{
        orderId:Math.random()*10000,
        pid:id,
        customerId:userid,
        name:name,
        price:price,
        status:"pending"
    }).then(() => {
      setMsg("product added to orders");
      navigate(`/order/${id}`)
    })
    .catch(() => setMsg("error while placing order"));
  }

  return (
    <div className="container">
      <h2>{msg}</h2>
      <div className="row">
        <div className="col-lg-5 m-1">
        <div className="card shadow" style={{
          height: "auto",
          width: "65vw"
        }}>
          <div className="card-body">
            <div >
                <img
                  src=""
                  alt=""
                  style={{
                    height: "50vh",
                    width: "60vw",
                    margin:"auto",
                    border: "1px solid black",
                    borderRadius:"10px"
                  }}
                />
                
                <div className=" m-2">
                  <h3 className="card-text">{name}</h3>productId : {id}
                  <div className="card-text" style={{fontSize:"12px"}}>$ {price}</div>
                  <div className="card-text" style={{fontSize:"12px"}}>
                  {catagory}
                  </div>
                  <div className="card-text" style={{fontSize:"12px"}}>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-text m-2">
            <button className="btn btn-primary m-3" onClick={addToCart}>Add to Cart</button>
            <button className="btn btn-success " onClick={addToOrders}>Order</button>
             
            </div>
          </div>
        </div>
    </div>
      
    </div>
  );
}

export default View;
