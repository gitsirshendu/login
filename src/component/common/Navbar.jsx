import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = (e) => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link active" to="/">
              Home
            </Link>
            <Link class="nav-link" to="/dashboard">
              Products
            </Link>
            <Link class="nav-link" to="/users">
              Users
            </Link>
            <Link class="nav-link" to="/qualification">
              Add Qualification
            </Link>
            <Link class="nav-link" to="/newproduct">
              New Product
            </Link>
            <Link class="nav-link" to="/products">
              Products
            </Link>
            <Link class="nav-link" to="/reactlisting">
              Listing
            </Link>
            <Link class="nav-link" to="/mdblisting">
              Listing
            </Link>
            <Link class="nav-link" to="/calendar">
              Calendar
            </Link>
            <Link class="nav-link" to="/pdf">
              PDF
            </Link>
            
            {localStorage.getItem("token") !== null ? (
              <>
                <Link class="nav-link" onClick={(e) => logout(e)} to="/login">
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
