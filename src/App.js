import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import AddUser from "./component/AddUser";
import ViewUser from "./component/ViewUser";
import UpdateUser from "./component/UpdateUser";
import Navbar from "./component/Navbar";
import Signup from "./component/Signup";
import Signin from "./component/Signin";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Signup />} />
    <Route path="/login" element={<Signin />} />
    <Route path="/home" element={<Home />} />
    {/**
    <Navbar/>
      <Route path="/adduser" element={<AddUser />} />
      <Route path="/get/:id" element={<ViewUser />} />
      <Route path="/update/:id" element={<UpdateUser />} />
     */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
