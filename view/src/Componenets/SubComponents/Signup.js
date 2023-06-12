import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../CSS/Signup.css";
import Header from "../Header";
import Footer from "../Footer";

const Signup = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/Signup";
      const { data: res } = await axios.post(url, data);
      if(res.status =='ok'){
	    alert("User registered")
      navigate("/login");
      console.log(res);
      }
      
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  function matching() {
    if (
      document
        .getElementById("email")
        .value.match(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
        
    ) {
      document.getElementById("submit").disabled = false;
      return;
    } else {
      document.getElementById("errors").innerText = "*Incorrect Email";
      document.getElementById("submit").disabled = true;
    }
  }

  return (
    <>
   

      <div className="signup_container">
        <div className="signup_form_container">
          <div className="left">
            <h1>Welcome Back</h1>
            <Link to="/login">
              <button type="button" className="green_btn">
                Sign in
              </button>
            </Link>
          </div>
          <div className="right">
            <form className="form_container" onSubmit={handleSubmit}>
              <h1>Create Account</h1>
              <input
                type="text"
                placeholder="First Name"
                name="fname"
                onChange={handleChange}
                value={data.fname}
                required
                className="input"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lname"
                onChange={handleChange}
                value={data.lname}
                required
                className="input"
              />
              <input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                onBlur={matching}
                onChange={handleChange}
                value={data.email}
                required
                className="input"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                
                onChange={handleChange}
                value={data.password}
                required
                className="input"
              />
              <p Id="errors"></p>
              {error && <div className="error_msg">{error}</div>}
              <button type="submit" className="white_btn">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default Signup;
