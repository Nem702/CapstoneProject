import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from "react";
import "../Nav/Nav.css";
import { ReactComponent as Logo } from "../../assets/Logo .svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="Logo">
        <Logo />
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/">About</CustomLink>
        <CustomLink to="/">Menu</CustomLink>
        <CustomLink to="/bookingPage">Reservations</CustomLink>
      </ul>
      <i class="fa-solid fa-xmark"></i>
      <i class="fa-solid fa-bars"></i>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
