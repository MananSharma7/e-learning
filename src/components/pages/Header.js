import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu massive">
      <div className="ui item header">Learn Online</div>
      <NavLink to="/" className={`item ${({ isActive }) => (isActive ? 'active' : 'inactive')}`}>
        Home
      </NavLink>
      <NavLink to="/login" className={`item ${({ isActive }) => (isActive ? 'active' : 'inactive')}`}>
        Login
      </NavLink>
      <NavLink to="/about" className={`item ${({ isActive }) => (isActive ? 'active' : 'inactive')}`}>
        About
      </NavLink>
      <NavLink to="/dashboard" className={`item ${({ isActive }) => (isActive ? 'active' : 'inactive')}`}>
        Dashboard
      </NavLink>
    </div>
  );
}

export default Header;