import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg"
        style={{
          width: "100%",
          color: "white",
          fontFamily: "Times New Roman",
          fontWeight: "bold",
          fontSize: "30px",
          backgroundColor: "green",
        }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{
              color: "white",
              fontFamily: "Times New Roman",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            TeleMedicine
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: "20px" }}>
              {/* Adjust the margin-left value to add space */}
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{ color: "black" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item" style={{ marginLeft: "20px" }}>
                {/* Add margin-left to create space */}
                <Link className="nav-link" to="/about" style={{ color: "black" }}>
                  About Us
                </Link>
              </li>
              <li className="nav-item " style={{ marginLeft: "20px" }}>
                {/* Add margin-left to create space */}
                <Link
                  className="nav-link"
                  to="/services"
                  aria-expanded="false"
                  style={{ color: "black" }}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item" style={{ marginLeft: "20px" }}>
                {/* Add margin-left to create space */}
                <Link className="nav-link" to="/contact" style={{ color: "black" }}>
                  Contact
                </Link>
              </li>
              <li className="nav-item" style={{ marginLeft: "20px" }}>
                {/* Add margin-left to create space */}
                <Link className="nav-link" to="/signin" style={{ color: "black" }}>
                  Sign In
                </Link>
              </li>
              <li className="nav-item" style={{ marginLeft: "20px" }}>
                {/* Add margin-left to create space */}
                <Link className="nav-link" to="/signup" style={{ color: "black" }}>
                  Sign Up
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ color: "white" }}
              />
              <button
                className="btn btn-outline-primary"
                type="submit"
                style={{
                  backgroundColor: "blue",
                  borderColor: "blue",
                  color: "white",
                }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
