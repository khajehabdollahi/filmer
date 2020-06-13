import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Form } from 'reactstrap';
import { Link } from "react-router-dom";

const NavMenu = (props) => {

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar color="faded" light className="container" expand="md">
      <Link to="/" className="mr-auto navbar-brand text-info"><h3>MOVIES</h3></Link>
      <NavbarToggler onClick={toggleNavbar} className="mr-0" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar className="text-right ml-auto">
          <NavItem>
            <Link to="/new" className="nav-link text-info h5">ADD NEW MOVIE</Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="nav-link text-info h5">ABOUT</Link>
          </NavItem>
          
        </Nav>
      </Collapse>
      </Navbar>
  )
}

export default NavMenu;