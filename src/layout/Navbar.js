import react from "react";
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        
<nav className="navbar navbar-expand-lg">
  <div className="container">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="navbar-brand" to="/">Home</NavLink>
        <NavLink className="navbar-brand" to="/Breweries">breweries</NavLink>
      </li>
      </ul>
      <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="navbar-brand" to="/Architecture">Architecture</NavLink>
      </li>
      </ul>
  </div>
</nav>
    );
};

export default Navbar;