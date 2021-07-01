import { useContext } from "react";
import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";
//import $ from 'jquery';
//import { findDOMNode } from 'react-dom';
const Navbar = () => {
  let url = "";
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  return (
    <div className="nav teal lighten-2" style={{ height: "60px" }}>
      <input type="checkbox" id="nav-check"></input>
      <div className="nav-header">
        <div className="nav-title white-text center-align">
          <h5
            style={{
              margin: "10px",
              fontFamily: "Righteous",
              letterSpacing: "2px",
            }}
          >
            <b>Intellect</b>
          </h5>
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check" style={{ height: "60px" }}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div
        className="nav-links"
        style={{
          display: "flex",
          maxHeight: "9vh",
          justifyContent: "center",
          marginTop: "5px",
          marginRight: "5vh",
        }}
      >
        <div className="item">
          <Link to="/" className="white-text text-darken-2">
            <i className="fas fa-home"></i>
          </Link>
        </div>
        <div className="item">
          <Link to="/profile" className="white-text text-darken-2">
            <i className="fas fa-user-circle"></i>
          </Link>
        </div>
        <div className="item">
          <Link to="/addQuestion" className="white-text text-darken-2">
            <i className="fas fa-plus-circle"></i>
          </Link>
        </div>
        <div className="item">
          <div
            onClick={() => {
              localStorage.clear();
              history.push("/login");
              dispatch({ type: "CLEAR" });
            }}
            className="white-text text-darken-2"
          >
            <i className="fas fa-power-off"></i>
          </div>
        </div>
        <div className="item">
          <Link to="/info" className="white-text text-darken-2">
            <i className="fas fa-info-circle"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
