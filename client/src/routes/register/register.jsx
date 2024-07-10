import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { GoogleLogin } from '@react-oauth/google';

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  // const googleAuth =async(e)=>{
  //   setIsLoading(true)
  //   setError("")
  //   e.preventDefault()
  //     try{
  //       const response = await fetch('http://localhost:8800/api/auth/auth/google', {
  //         method: 'GET', // or 'POST', 'PUT', 'DELETE', etc.
  //         headers: {
  //           'Content-Type': 'application/json',
  //           // Add other headers as needed
  //         },
  //         credentials:"include" // include credentials
  //       });
    
  //     }
  //     catch(err){
  //       console.log("Error hoggya bklll")
  //       setError(err.response.data.message);
  //     }
  //     finally{
  //       setIsLoading(false)
  //     }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    setIsLoading(true);     
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });

      navigate("/login");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Register</button>
          <div>
            {/* <button className="pass" onClick={<GoogleLogin className="sign" onSuccess={credentialResponse=>{
              console.log(credentialResponse)
            }} onError={() => {
              console.log('Login Failed');
            }} />}>Login via Google</button> */}
            <GoogleLogin className="sign" onSuccess={credentialResponse=>{
              console.log(credentialResponse)
            }} onError={() => {
              console.log('Login Failed');
            }} />
            {/* <button className="pass" onClick={googleAuth}>Login via Google</button> */}
            <button className="pass">Login via Github</button>
          </div>
          {error && <span>{error}</span>}
          <Link to="/login">   Do you have an account?</Link>
        </form>
      </div>
     
    </div>
  );
}

export default Register;
