import React from "react";

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
          <a
            className="navbar-brand"
            href="/"
            style={{
              color: "white",
              fontFamily: "Times New Roman",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            TeleMedicine
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: "20px" }}>
              {/* Adjust the margin-left value to add space */}
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  style={{ color: "black" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item" style={{ marginLeft: "20px" }}>
                {/* Add margin-left to create space */}
                <a className="nav-link" href="/" style={{ color: "black" }}>
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown" style={{ marginLeft: "20px" }}>
                {/* Add margin-left to create space */}
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "black" }}
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item" style={{ marginLeft: "20px" }}>
                {/* Add margin-left to create space */}
                <a className="nav-link" href="/" style={{ color: "black" }}>
                  Contact
                </a>
              </li>
              <li className="nav-item" style={{ marginLeft: "20px" }}>
                {/* Add margin-left to create space */}
                <a className="nav-link" href="/" style={{ color: "black" }}>
                  Sign In
                </a>
              </li>
              <li className="nav-item" style={{ marginLeft: "20px" }}>
                {/* Add margin-left to create space */}
                <a className="nav-link" href="/" style={{ color: "black" }}>
                  Sign Up
                </a>
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
