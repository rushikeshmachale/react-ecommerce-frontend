import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AdminOrderUpdate = () => {
  const navigate = useNavigate()

  
  const { ordersId,users } = useContext(UserContext);
  console.log('value of x is ',ordersId)
  const [order, setOrder] = useState({
    orderId: "",
    pid: "",
    customerId: "",
    name: "",
    price: "",
    status: "",
  });

  const { orderId, pid, customerId, name, price, status } = order;
  // console.log(order.id)
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const result = await axios.get(
      `http://localhost:8080/orders/findbyid/${ordersId}`
    );
    setOrder(result.data);
    // setProducts(result.data);
  };

  console.log(order)
  const change = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };
  let action = "";
  const handleChange = (e) => {
    action = e.target.value;
  };
  const updateData = async(e)=>{
    e.preventDefault()
    await axios.put(`http://localhost:8080/orders/update/${orderId}`,{
        orderId,
        pid,
        customerId,
        name,
        price,
        status
    }).then(()=>{
      navigate('/admin/orders')
    })
  }
  return (
    <div className="container">
    <form action="" className="form-control m-4">
    <h2 className="text-center">Update Product details</h2>

    <input
      className="form-control px-1 m-2"
      type="text"
      name="orderId"
      value={orderId}
      onChange={change}
      placeholder="Enter product name"
    />
    <input
      className="form-control px-1 m-2"
      type="text"
      name="pid"
      value={pid}
      onChange={change}
      placeholder="Enter product catagory"
    />
    <textarea
      className="form-control px-1 m-2"
      type="text"
      name="name"
      value={name}
      onChange={change}
      placeholder="Enter product specification"
    />
    <input
      className="form-control px-1 m-2"
      type="text"
      name="customerId"
      value={customerId}
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
    <select name="status" value={status} id="" className="form-control mx-2" onChange={change}>
    <option  disabled>{status}</option>
    <option name="pending" value="pending">pending</option>
    <option name="received" value="received">received</option>
    <option name="out for delivery"  value="out for delivery">out for delivery</option>
    <option name="delivered" value="delivered">delivered</option>
    </select>
    <button className="btn bg-success text-light m-2" onClick={updateData}>
      Update
    </button>
    <Link className="btn bg-warning text-light" to={`/adminhome/${users}`}>
    Cancel
  </Link>
  
  </form>
    </div>
  );
};

export default AdminOrderUpdate;
