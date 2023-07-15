import React from "react";
import { useAuth } from "../hooks/useAuth";
import { NavLink } from "react-router-dom";

const Header = () => {
  const auth = useAuth();
  return (
    <div className="ui secondary pointing menu massive">
      <div className="ui item header">Learn Online</div>
      <NavLink to="/" className={`item ${({ isActive }) => (isActive ? 'active' : 'inactive')}`}>
        Home
      </NavLink>
      {auth.user &&
        <NavLink to="/dashboard" className={`item ${({ isActive }) => (isActive ? 'active' : 'inactive')}`}>
          Dashboard
        </NavLink>
      }
      {auth.user &&
        <NavLink to="/courses" className={`item ${({ isActive }) => (isActive ? 'active' : 'inactive')}`}>
          Courses
        </NavLink>
      }
      <NavLink to="/login" className={`item ${({ isActive }) => (isActive ? 'active' : 'inactive')}`}>
        Login
      </NavLink>
      <NavLink to="/about" className={`item ${({ isActive }) => (isActive ? 'active' : 'inactive')}`}>
        About
      </NavLink>
    </div>
  );
}

export default Header;