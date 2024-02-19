import React, { useState } from "react";
import axios from "axios";
import { BASE_API } from "../../../env";
import { Divider } from "antd";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the form is submitted
    try {
      await axios.post(`${BASE_API}/api/send/email`, formData);
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="formthree ptb-100">
    <h1>Contact Us</h1>
    <Divider/>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-md-offset-2">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="sr-only">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameSix"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="sr-only">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailSix"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="sr-only">Message</label>
                <textarea
                  className="form-control"
                  rows="7"
                  name="message"
                  placeholder="Write Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="d-flex">
                <button
                  type="submit"
                  className="my-3 w-100 btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
