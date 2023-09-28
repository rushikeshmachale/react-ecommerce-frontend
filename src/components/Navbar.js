import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserContext from "../context/UserContext";
const Navbar = () => {
  const { email } = useParams();
  const { users } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
      <span>
        <Link className="navbar-brand" to={`/adminhome/${users}`}>
        Full Stack App
        </Link>
        </span>

        <span className="text-white">Admin Dashaboard</span>
        <div className="dropdown mx-2">
          {/**
  
        <span className="dropdown-toggle mx-5 text-light border border-dark rounded-5 p-2 text-center"  type="button" data-bs-toggle="dropdown" aria-expanded="false">{email.substring(0, email.indexOf("@"))}</span>
 */}

          <span
            className="dropdown-toggle mx-5 text-light border border-dark rounded-5 p-2 text-center"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {email.substring(0, email.indexOf("@"))} 🧞
          </span>

          <ul className="dropdown-menu my-2">
            <li>
              <Link className="dropdown-item" to={`/addproduct/${email}`}>
                Add Product
              </Link>
            </li>

            <li>
              <Link className="dropdown-item" to={`/admin/orders`}>
                Order Requests
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

export default Navbar;
