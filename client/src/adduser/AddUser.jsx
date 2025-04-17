import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./adduser.css";
import toast from "react-hot-toast";

const AddUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };
  const [user, setUsers] = useState(users);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/user`, user)
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" });
        console.log("user created successfully");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="addUser">
      <Link to={"/"} type="button" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i>
        Back
      </Link>
      <h3>Add New User</h3>
      <form className="addUserForm" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Enter your name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Enter your email"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Enter your address"
          />
        </div>
        <div className="inputGroup">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
