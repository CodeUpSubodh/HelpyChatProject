import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaWindowClose } from "react-icons/fa"
import "../../CSS/LoginPopUp.css"

function LoginPopUp(props) {
    const[isLoggedIn,setLogin]=useState(false)
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
    
	

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4000/Login";
			const { data: res } = await axios.post(url, data);
			if(res.status=="ok"){
			localStorage.setItem("token", res.data);
			setLogin(true)
			alert("Welcome back, you are Logged in.")
			window.location = "/home";
			
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
  return(props.trigger) ? (
    <div className="login_container">
			<div className="login_form_container">
				<div className="left">
					<form className="form_container" onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
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
						{error && <div className="error_msg">{error}</div>}
						<button type="submit" className="green_btn">
							Sign In
						</button>
					</form>
				</div>
                
				<div className="right">
                    
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className="white_btn">
							Sign Up
						</button>
					</Link>
                    
				</div>
                {props.children}
                
               
                    
			</div>
            
		</div>
  ): "";
}

export default LoginPopUp