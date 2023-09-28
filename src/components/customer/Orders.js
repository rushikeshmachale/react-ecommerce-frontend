import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import CustomerNavbar from "../CustomerNavbar";
import { Link } from "react-router-dom";

const Orders = () => {
  const { userid } = useContext(UserContext);
  const { users } = useContext(UserContext);
  const [order, setOrder] = useState([]);

  let x=useEffect(() => {
    loadData();
  }, []);

  const loadData = async (e) => {
    const result = await axios.get(
      `http://localhost:8080/orders/find/${userid}`
    );
    setOrder(result.data);
  };
  return (
    <>
      <CustomerNavbar email={users} />
      <Link className="btn btn-info mx-4 my-2" to={`/home/${users}`}>Back</Link>
      <button className="btn" onClick={useEffect(()=>{loadData()})}>🔃</button>
      <div className="container">
      <div className="row">
      <h2 className="heading my-1">Order history</h2>
      
      <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>OrderId</th>
                <th>ProductId</th>
                <th>Product name</th>
                <th>Product price</th>

                <th>Status </th>
              </tr>
            </thead>
            <tbody>
              {order.map((p) => (
                <tr>
                  <td>{p.orderId}</td>
                  <td>{p.pid}</td>
                  <td>{p.name}</td>
                  <td>{p.price}</td>

                  <td>{p.status}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Orders;
