import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { getUsers } from "../service/Api";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(initialValues);
  const [dataError, setDataError] = useState({});
  const [loginStatus, setLoginStatus] = useState(false);

  let name, value;
  const setUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });

    let errorMsg = "";
    switch (name) {
      case "email":
        errorMsg = "Email should not be empty";
        break;
      case "password":
        errorMsg = "Password should not be empty";
        break;
      default:
        errorMsg = "";
    }

    if (value === null || value === "" || value === undefined) {
      setDataError({ ...dataError, [name]: errorMsg });
    } else {
      setDataError({ ...dataError, [name]: "" });
    }
  };

  const validateData = () => {
    let error = {};
    if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        user.email
      )
    ) {
      error.email = "Enter valid email address";
    }
    if (user.password.length < 6) {
      error.password = "Password at least 6 charecters long";
    }
    setDataError(error);
    return error;
  };

  const loadData = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  const validateUser = async () => {
    let validUser = users.filter((item) => {
      return item.email === user.email && item.password === user.password;
    });

    if (validUser.length > 0) {
      let id = validUser.id;
      localStorage.setItem("token", id);
      localStorage.setItem("username", validUser.name);
      setLoginStatus(true);
      navigate("/dashboard");
    } else {
      setLoginStatus(false);
      swal("Login Denied!", "Invalid Credentials!", "error");
    }
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    let errorData = validateData();
    if (Object.keys(errorData).length === 0) {
      validateUser();
    }
  };

  const password_show_hide=()=> {
    var x = document.getElementById("password");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";     
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5" data-aos="fade-up">
        <div className="col-lg-4">
          <div className="info-wrap">
            <div className="row">
              <div className="info">
                <h4>Login:</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 justify-content-center" data-aos="fade-up">
        <div className="col-lg-4 card py-3">
          <form onSubmit={(e) => submitLogin(e)} method="post" role="form">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                data-rule="email"
                data-msg="Please enter a valid email"
                onChange={(e) => setUserData(e)}
              />
              <div className="validate text-danger">{dataError.email}</div>
            </div>

            <div class="form-group">
              <div class="input-group" id="show_hide_password">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Password"
                  data-rule="password"
                  data-msg="Please password"
                  onChange={(e) => setUserData(e)}
                />
                <div class="input-group-append">
                  <span
                    class="input-group-text"
                    onClick={password_show_hide}
                  >
                    <i class="fas fa-eye" id="show_eye"></i>
                    <i class="fas fa-eye-slash d-none" id="hide_eye"></i>
                  </span>
                </div>
              </div>
              <div className="validate text-danger">{dataError.password}</div>
            </div>

            

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <div className="mt-3">
              Yet not registered? <Link to="/register">click here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
