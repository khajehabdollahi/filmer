import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const TopNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  expand="md" >
        <NavbarBrand href="/">Iran Attractions</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        
            <Nav  style={{display:"flex", justifyContent:"spacearound",height:"50px"}} className="mr-auto" navbar >
              <NavItem>
                <NavLink href="/contact/">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About us</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/new">Add films</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href=""></NavLink>
              </NavItem>
            </Nav>
       
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
