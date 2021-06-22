import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import logo from "../1bd0810ff4454b4ab644323927b0b826 (1).png";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = (props) => {
  return (
    <nav>
      <Link to={PATHS.HOMEPAGE} className="nav__projectName">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br> When you just literally can't even
      </Link>

      <div className="nav__authLinks">
        {props.user ? (
          <>
            {/* <Link to={PATHS.PROTECTEDPAGE} className="authLink">
              Protected Page
            </Link> */}

            <Link to={PATHS.PROFILEPAGE} className="profpage" >Profile</Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={PATHS.SIGNUPPAGE} className="authLink">
              Signup
            </Link>
            <Link to={PATHS.LOGINPAGE} className="authLink">
              Log In
            </Link>
          </>
        )}
      </div>
      <p className="search-bar">
        <SearchBar />
      </p>
    </nav>
  );
};

export default Navbar;
