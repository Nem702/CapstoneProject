import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React,{useState} from "react";
import "../Nav/Nav.css";
import { ReactComponent as Logo } from "../../assets/Logo .svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false)
  }
  return (
    <nav >
      <Link to="/" className="Logo">
        <Logo />
      </Link>
      <ul className="navbar" style={{right: menuOpen ? '0' : '99999999px'}}>
      <button className="closeMenuBtn" onClick={closeMenu}><i className="fa-solid fa-xmark" ></i></button>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/">About</CustomLink>
        <CustomLink to="/">Menu</CustomLink>
        <CustomLink to="/bookingPage">Reservations</CustomLink>
        
      </ul>
      <div className="responsiveMenu">
      <button className="openMenuBtn" onClick={openMenu}><i className="fa-solid fa-bars"></i></button>
      </div>
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