import React from "react";
import "./Login.css";
import { AuthContext } from "../../AppProvider";
import { Modal, message } from "antd";
import axios from "axios";
import { BASE_API } from "../../env";

const config = {
  title: "Error!",
  content: (
    <>
      <p>All fields are required</p>
    </>
  ),
};

function Login() {
  const { user, setUser, token, setToken, isLogin, setIsLogin } =
    React.useContext(AuthContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      return Modal.error(config);
    }
    try {
      const response = await axios.post(`${BASE_API}/api/admin/login`, {
        password: password.trim(),
        email: email.trim(),
      });
      if (response.data.success) {
        message.success(response.data.message || "Login successful");
        sessionStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        setIsLogin(true);
      }
    } catch (error) {
      console.log("failed to login".error);
      message.error(error.response.data.message || "Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">Welcome to CRUD app</h1>
            <p className="col-lg-10 fs-4">
              Manage your data efficiently with our CRUD (Create, Read, Update,
              Delete) application. Create new entries, view existing records,
              update information, and remove outdated data effortlessly.
              Streamline your workflow and enhance productivity with our
              user-friendly interface and powerful tools.
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form
              className="p-4 p-md-5 border rounded-3 bg-light text-black"
              onSubmit={handleLogin}
            >
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  autoComplete="false"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <label for="floatingPassword">Password</label>
              </div>

              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign In
              </button>
              <hr className="my-4" />
              <small className="text-muted">
                By clicking Sign In, you agree to the terms of use.
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
