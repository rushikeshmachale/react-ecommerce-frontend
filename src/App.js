import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Home from "./components/customer/Home";
import AdminHome from "./components/admin/AdminHome";
import UpdateProduct from "./components/admin/UpdateProduct";
import ViewProduct from "./components/admin/ViewProduct";
import AddProduct from "./components/admin/AddProduct";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Cart from "./components/customer/Cart";
import CustomerNavbar from "./components/CustomerNavbar";
import UserContextProvider from "./context/UserContextProvider";
import View from "./components/customer/View";
import Orders from "./components/customer/Orders";
import AdminOrders from "./components/admin/AdminOrders";
import AdminOrderUpdate from "./components/admin/AdminOrderUpdate";
import Errors from "./components/Errors";

function App() {
  return (
    <UserContextProvider>
    <BrowserRouter>
    <Routes>
    <Route path="/navbar" element={<Navbar />} />
    <Route path="/cust_navbar" element={<CustomerNavbar />} />
    <Route path="/" element={<Signin />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/adminhome/:email" element={<AdminHome />} />
    <Route path="/addproduct/:email" element={<AddProduct />} />
    <Route path="/admin/orders" element={<AdminOrders />} />
    <Route path="/admin/orderupdate/:id" element={<AdminOrderUpdate />} />

    <Route path="/update/:id" element={<UpdateProduct/>}/>
    <Route path="/view/:id" element={<ViewProduct/>}/>
    <Route path="/home/:email" element={<Home />} />
    <Route path="/cart/:id" element={<Cart/>}/>
    
    <Route path="/cart/view/:id" element={<View/>}/>
    <Route path="/order/:id" element={<Orders/>}/>
    <Route path="*" element={<Errors/>}/>
    </Routes>
    </BrowserRouter>
    </UserContextProvider>
    );
}

export default App;
