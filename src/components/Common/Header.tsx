import React from "react";
import { Link } from "react-router-dom";
import "../Styles/commonStyles.css";
export default class Header extends React.Component {
    render() {
      return (
        <div className="top-nav">
          <Link to="/" className="nav-items">Home</Link>
          <Link to="/contact-us" className="nav-items">Contact</Link>
          <Link to="/about-us" className="nav-items">About</Link>
         </div>
      );
    }
  }
  