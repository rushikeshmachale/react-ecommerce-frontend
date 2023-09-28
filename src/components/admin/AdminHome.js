import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar.js";
import UserContext from "../../context/UserContext.js";

const AdminHome = () => {
  const {users}=useContext(UserContext)
  
  const { email } = useParams();
  const [product, setData] = useState([]);
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const result = await axios.get("http://localhost:8080/products/getproduct");
    setData(result.data);
  };
  const deleteP=async(id)=>{
      await axios.delete(`http://localhost:8080/products/delete/${id}`)
      loadData();
  }
  return (
    <div>
      <Navbar email={email} />
      <div className="container-fluid">
      
      <div className="m-5">
          <div className="row justify-content-center">
            {product.map((d) => (
              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-4 m-1">
              <div className="card" >
                <div className="card-body">
                  <div className="d-flex flex-wrap">
                  <div>
                  <img
                  src=""
                  alt=""
                  style={{
                    height: "100px",
                    width: "100px",
                    border: "1px solid black",
                    borderRadius:"10px"
                  }}
                  />
                  <div className="card-text m-1 fw-medium" style={{fontSize:"12px"}}>
                  {d.catagory}
                  </div>
                  </div>
                      <div className="mx-2">
                        <h3 className="card-text">{d.name}</h3>productId : {d.id}
                        <div className="card-text" style={{fontSize:"12px"}}>₹ {d.price}</div>
                        
                        <div className="card-text">
                        
                        <span className="text-warning fs-4 ">
                        {d.ratings}
                        </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-text m-2">
                    <div className="card-text mx-2"  style={{fontSize:"13px"}}>{d.specification}</div>
                    <Link to={`/update/${d.id}`} className="btn btn-success m-1">⚙️</Link>
                    <button onClick={()=>deleteP(d.id)} className="btn btn-danger m-1">🗑️</button>
                    <Link to={`/view/${d.id}`} className="btn btn-info m-1">👁️</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="form-control text-center fw-bold text-success p-3">Copyright @2023</footer>
    </div>
  );
};

export default AdminHome;
