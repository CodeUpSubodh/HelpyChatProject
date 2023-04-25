import React, { useState } from "react";
import validator from "validator";
import zxcvbn from "zxcvbn";
import "../../CSS/Signup.css";
import axios from "axios";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};

    // Validate name
    if (!name) {
      errors.name = "Name is required";
    }

    // Validate email
    if (!email) {
      errors.email = "Email is required";
    } else if (!validator.isEmail(email)) {
      errors.email = "Invalid email address";
    }

    // Validate password
    if (!password) {
      errors.password = "Password is required";
    } else if (zxcvbn(password).score < 3) {
      errors.password = "Password is not strong enough";
    }

    // Validate confirm password
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length === 0) {
      // Here you can make an API call to submit the form data
      axios
        .post("/api/user", {
          name,
          email,
          password,
        })
        .then((response) => {
          console.log("User data saved:", response.data);
          // Clear form after successful submission
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setErrors({});
        })
        .catch((error) => {
          console.error("Error saving user data:", error);
        });
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="signupbox">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </label>
        <br />
        <button type="submit" disabled={Object.keys(errors).length > 0}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupPage;