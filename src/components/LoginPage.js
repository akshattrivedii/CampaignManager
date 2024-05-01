import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login(){
    const [email , setEmail] = useState()
    const [password , setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e)=> {
        e.preventDefault();
        axios.post('http://localhost:3001/login', {email , password})
        .then(result => 
          {console.log(result)
            if(result.data === "success"){
                navigate('/')
            } else {
              console.log("login failed")
            }
        })
        .catch(err => console.log(err))
      }
      return(
        <div style={{height: "745px"}} className="d-flex justify-content-center align-items-center bg-secondary ">
      <div className="bg-white p-3 rounded w-25">
        <h2 style={{color:'black'}}> Login </h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" onSubmit={handleSubmit} className="btn btn-success w-100 rounded-0">
            Login
          </button>
          </form>
         
      </div>
    </div>
      )
    
}

export default Login; 