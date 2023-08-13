import logo from "../../assets/images/Bestflix Logo.png"
import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.scss";
import { Helmet } from "react-helmet-async";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const axiosInstance=axios.create({
    baseURL:process.env.REACT_APP_API_URL,});
  const history = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axiosInstance.post("auth/register", { email,username, password });
      history("/login");
    } catch (err) {
      console.log(err);
    }
  };
  const handleSign= ()=>{
    history("/login");
  }
  return (
    <div className="register">
      <Helmet>
        <title>Bestflix | Register</title>
      </Helmet>
        <div className="top">
          <div className="wrapper">
            <img
              className="logo"
              src={logo}
              alt=""
            />
            
            {/* <button className="loginButton" onClick={()=>handleSign()}>Sign In</button> */}
            
          </div>
        </div>
        <div className="container">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          {!email ? (
            <div className="input">
              <input type="email" placeholder="email address" ref={emailRef} />
              <button className="registerButton" onClick={handleStart}>
                Get Started
              </button>
              <button className="registerButton" onClick={handleSign}>
                Sign In
              </button>
            </div>
          ) : (
            <form className="input">
              <input type="username" placeholder="username" ref={usernameRef} />
              <input type="password" placeholder="password" ref={passwordRef} />
              <button className="registerButton" onClick={handleFinish}>
                Start
              </button>
            </form>
          )}
        </div>
      
    </div>
  );
}
