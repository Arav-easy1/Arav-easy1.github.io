import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/study">Study</Link>
      <Link to="/project">Project</Link>
    </div>
  );
}

export default Navigation;
