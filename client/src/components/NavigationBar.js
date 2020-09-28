import React from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import logo from '../static/rode_orm_logga.png'

import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <div className="navigationBar">
      <Navbar className="theNavbar" bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">
            <img 
              src={logo}
              width="125"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link><Link to="/laget">LAGET</Link></Nav.Link>
            <Nav.Link><Link to="/kalender">KALENDER</Link></Nav.Link>
            <Nav.Link><Link to="/serie">SERIER</Link></Nav.Link>
            <Nav.Link><Link to="/bilder">BILDER</Link></Nav.Link>
            <Nav.Link><Link to="/kontakt">KONTAKT</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}