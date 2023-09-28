import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Navbar from "../Navbar";
import CustomerNavbar from "../CustomerNavbar";

function Cart({ item }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  const { userid } = useContext(UserContext);
  console.log(userid);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    let result = await axios.get(`http://localhost:8080/cart/get/${userid}`);
    setProduct(result.data);
    console.log(result.data);
  };

  const { setCartQuantity } = useContext(UserContext);
  setCartQuantity(product.length);
  return (
    <>
      <CustomerNavbar />
      <div className="container">
        <div className="row">
        <h2 className="heading my-1">Cart</h2>
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>ProductId</th>
                <th>Product name</th>
                <th>Product catagory</th>
                <th>Product price</th>

                <th className="text-center">Action </th>
              </tr>
            </thead>
            <tbody>
              {product.map((p) => (
                <tr>
                  <td>{p.pid}</td>
                  <td>{p.pname}</td>
                  <td>{p.pcatagory}</td>
                  <td>{p.price}</td>

                  <td width={200}>
                    <div className="text-center">
                      <button className="btn btn-success m-1">🛒</button>
                      <button className="btn btn-danger">🗑</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Cart;
