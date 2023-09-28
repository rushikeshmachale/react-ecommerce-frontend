import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import UserContext from "../../context/UserContext";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  const {users} = useContext(UserContext)
  const [data,setData] = useState(null)
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async (e) => {
    const result = await axios.get(`http://localhost:8080/orders/get`);
    setOrders(result.data);
  };
  
  const {setOrdersId} = useContext
  (UserContext) 
  const {setOrderCustomerId} = useContext(UserContext)
  return (
    <div className="container-fluid">
    <form action="" className="form-control my-4">
    <Link className="btn btn-primary float-end" to={`/adminhome/${users}`}>Home</Link>
    <h2 className="text-center">All orders</h2>
    <table className="table table-bordered">
    <thead>
    <tr>
    <th>customerid</th>
    <th>Order id</th>
    <th>Product id</th>
    <th>product name</th>
    <th>price</th>
    <th>Action</th>
    </tr>
        </thead>
        <tbody>
        {orders.map((p) => (
          <tr>
          
            <td>{p.customerId}</td>
            <Link onClick={()=>setOrdersId(p.orderId)} to={`/admin/orderupdate/${p.orderId}`}>
            
            <td>{p.orderId}</td>
            </Link>
            <td>{p.pid}</td>
            <td>{p.name}</td>
            <td>{p.price}</td>
              <td>
              {p.status}
              </td>
              </tr>
              ))}
              </tbody>
              </table>
              </form>
    </div>
  );
};

export default AdminOrders;
