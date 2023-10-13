import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../service/Api";
import TheCalendar from "../component/common/TheCalendar";
import "../Assets/Calender.css";

const Register = () => {
  const initialValues = {
    name: "",
    mobile: "",
    email: "",
    password: "",
    dob: "",
  };

  const navigate = useNavigate();
  const [user, setUser] = useState(initialValues);
  const [dataError, setDataError] = useState({});

  let name, value;
  const postData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });

    let errorMsg = "";
    switch (name) {
      case "name":
        errorMsg = "Name should not be empty";
        break;
      case "mobile":
        errorMsg = "Mobile should not be empty";
        break;
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
    if (user.name === "") {
      error.name = "Enter your name";
      setDataError({ ...dataError, name: "No name entered" });
      console.log(dataError);
    }
    if (user.mobile === "") {
      error.mobile = "Enter your phone nmber";
    }
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
    return error;
  };

  const submitData = async (e) => {
    e.preventDefault();
    let ErrorList = validateData();
    setDataError(validateData());
    // console.log(user);
    if (Object.keys(ErrorList).length === 0) {
      await addUser(user);
      navigate("/login");
    }
  };

  const [calenderDate,setCalenderDate]=useState();
  // console.log("CALEE",calenderDate);
  const handleCalendar=(date)=> {
    setCalenderDate(date)
    setUser({ ...user, dob: calenderDate });
    // console.log(user);
  }

  useEffect(()=>{
    setUser({ ...user, dob: calenderDate });
  },[calenderDate])
  // console.log(user);

  return (
    <div class="container">
      <div class="row justify-content-center mt-5" data-aos="fade-up">
        <div class="col-lg-8">
          <div class="info-wrap">
            <div class="row">
              <div class="info">
                <h4>Register:</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5 justify-content-center" data-aos="fade-up">
        <div class="col-lg-8 card py-3">
          <form method="post" role="form">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="name"
                id="name"
                placeholder="Your Full name"
                data-rule="name"
                data-msg="Please enter your name"
                onChange={(e) => postData(e)}
              />
              <div class="validate text-danger">{dataError.name}</div>
            </div>

            <div class="form-group">
              <TheCalendar returnDate={handleCalendar} />
            </div>

            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="mobile"
                id="mobile"
                placeholder="Your phone number"
                data-rule="name"
                data-msg="Please enter your name"
                onChange={(e) => postData(e)}
              />
              <div class="validate text-danger">{dataError.mobile}</div>
            </div>

            <div class="form-group">
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                data-rule="email"
                data-msg="Please enter a valid email"
                onChange={(e) => postData(e)}
              />
              <div class="validate text-danger">{dataError.email}</div>
            </div>

            <div class="form-group">
              <input
                type="password"
                class="form-control"
                name="password"
                id="password"
                placeholder="Password"
                data-rule="email"
                data-msg="Please enter password"
                onChange={(e) => postData(e)}
              />
              <div class="validate text-danger">{dataError.password}</div>
            </div>

            <div class="text-center">
              <button
                type="submit"
                onClick={submitData}
                className="btn btn-primary"
              >
                Register
              </button>
            </div>
            <div className="mt-3">
              Already registered? <Link to="/login">click here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
