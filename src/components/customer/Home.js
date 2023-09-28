import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import CustomerNavbar from "../CustomerNavbar";
import UserContext from "../../context/UserContext";

const Home = () => {
  const navigate = useNavigate();

  const { setUserid } = useContext(UserContext);

  const { users } = useContext(UserContext);
  const [product, setData] = useState([]);
  const [cust, setCust] = useState([]);
  useEffect(() => {
    loadData();
    loadCustomerId();
  }, []);
  let [index, setIndex] = useState(0);

  const loadData = async () => {
    const result = await axios.get("http://localhost:8080/products/getproduct");
    setData(result.data);
    setIndex(index + 1);
  };

  const loadCustomerId = async () => {
    const result = await axios.get(
      `http://localhost:8080/customers/find/${users.email}`
    );
    setUserid(result.data.id);
  };

  const { email } = useParams();
  return (
    <div>
      <CustomerNavbar email={email} />
      <div className="container-fluid">
        <div className="m-1 d-flex flw">
          <div className="w-25 my-4 mx-1 " >
            <b>Catagory</b>
            <div className="py-2">
              <h6 className="py-2">
                <Link>Electronics</Link>
              </h6>
              <h6 className="py-2">
                <Link>Clothes</Link>
              </h6>
              <h6 className="py-2">
                <Link>Sports</Link>
              </h6>
              <h6 className="py-2">
                <Link>Furniture</Link>
              </h6>
              <h6 className="py-2">
                <Link>Books</Link>
              </h6>
              <h6 className="py-2">
                <Link>Food</Link>
              </h6>
            </div>
          </div>
          <div>
            <div className="row justify-content-center">
              {product.map((d) => (
                <div className=" col-lg-3 col-md-5 col-sm-4 col-xl-3 d-flex  m-2">
                  <div
                    className="card "
                    style={{ width: "300px", height: "auto" }}
                  >
                    <div className="card-body">
                      <div className="d-flex flex-wrap">
                      <div>
                      
                      <img
                      src=""
                      alt=""
                      style={{
                        height: "110px",
                        width: "100px",
                        border: "1px solid black",
                        borderRadius: "10px",
                      }}
                      />
                      <div
                      className="card-text mx-1 "
                      style={{ fontSize: "12px" }}
                    >
                      {d.catagory}
                    </div>
                      </div>
                      <div className=" m-2">
                          <h3 className="card-text">{d.name}</h3>
                          <code>{d.id}</code>
                          <div
                            className="card-text"
                            style={{ fontSize: "12px" }}
                          >
                          ₹ {d.price}
                          </div>
                        
                          <div className="card-text text-warning fs-3">{d.ratings}</div>
                        </div>
                      </div>
                    </div>

                    <div className="card-text mx-2">
                      <div className="card-text" style={{ fontSize: "13px" }}>
                        {d.specification}
                      </div>
                      {/**
                        <Link to={`/customer/cart/${d.productId}`} className="btn btn-dark">
                        Cart
                        </Link>
                      */}
                      <Link
                        className="btn btn-success"
                        to={`/cart/view/${d.id}`}
                      >
                        👁️
                      </Link>
                      <Link
                        to={`/cart/view/${d.id}`}
                        className="btn btn-success m-1"
                      >
                        🛒
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className="form-control text-center fw-bold text-success p-3">
        Copyright @2023
      </footer>
    </div>
  );
};

export default Home;
