import "../../styles/navbar.modules.css";
import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/faq">FAQ</Link>
    </nav>
  )
}

export default Navbar