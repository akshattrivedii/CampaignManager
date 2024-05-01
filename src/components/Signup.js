import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Signup() {

  const [name , setName] = useState()
  const [email , setEmail] = useState()
  const [password , setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e)=> {
    e.preventDefault()
    axios.post('http://localhost:3001/register', {name , email , password})
    .then(result => {console.log(result)
    navigate('/login')
    })
    .catch(err => console.log(err))
  }

  return (
    <div style={{height: "745px"}} className="d-flex justify-content-center align-items-center bg-secondary ">
      <div className="bg-white p-3 rounded w-25">
        <h2 style={{color:'black'}}> Register </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <span htmlFor="email">
              <strong style={{color:'black'}}>Name</strong>
            </span>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <span htmlFor="email">
              <strong style={{color:'black'}}>Email</strong>
            </span>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <span htmlFor="email">
              <strong style={{color:'black'}}>Password</strong>
            </span>
            <input
            type="password"
            placeholder="Enter Password"
            name="password"
            className="form-control rounded-0"
            onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
          </form>
          <p style={{color:'black'}}>Already have an Account</p>
          <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Login
          </Link>
      </div>
    </div>
  );
}

export default Signup; 
