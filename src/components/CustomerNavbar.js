import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import UserContext from "../context/UserContext";
const CustomerNavbar = () => {
  const { users } = useContext(UserContext);
  const { email } = useParams();
  const { userid } = useContext(UserContext);

  const { cartQuantity } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
      <span className="navbar-brand" to={`/home/${users}`}>
      Full Stack App
      </span>
      <div style={{width:"auto"}}>
        
          <input
            type="text"
            className="form-control px-5"
            placeholder="🔍 Search product"
          />
        </div>
        <div className="dropdown mx-2">
          {/**
          
          <span className="dropdown-toggle mx-5 text-light border border-dark rounded-5 p-2 text-center"  type="button" data-bs-toggle="dropdown" aria-expanded="false">{email.substring(0, email.indexOf("@"))}</span>
        */}
          <Link to={`/cart/${userid}`} className="span bg-light rounded-3 p-1">
            🛒{cartQuantity}
          </Link>
          <span
            className="dropdown-toggle mx-5 text-light border border-dark rounded-5 p-2 text-center"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            🧞‍♂️
          </span>

          <ul className="dropdown-menu my-2">
            {/**to={`/home/${users}`} */}
            <li>
              <Link className="dropdown-item" to={`/home/${users}`}>
                Home
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/cart/${userid}`}>
                Cart
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/order/${userid}`}>
                Orders
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomerNavbar;
