import { useState } from "react";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import "../../CSS/Signup.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/contact";
      const response = await axios.post(url, formData);
      setFormSubmitted(true);
    } catch (error) {
      setFormError(true);
    }
  };

  return (
    <>
      <Header />

      <div className="signup_container">
        <div className="signup_form_container">
          <div className="left">
            <h1>Contact Us</h1>
          </div>
          <div className="right">
            <form className="form_container" onSubmit={handleSubmit}>
            <h1>Send us a message</h1>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input"
              />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input"
              />
              <textarea
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="input"
              />
              <textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="input"
              />
              {formError && (
                <div className="error_msg">
                  Error sending message, please try again later.
                </div>
              )}
              {formSubmitted ? (
                <div className="success_msg">
                  Your message has been sent. We'll get back to you soon.
                </div>
              ) : (
                <button type="submit" className="white_btn">
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
