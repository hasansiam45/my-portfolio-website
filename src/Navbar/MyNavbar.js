import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap';

const MyNavbar = () => {
    return (
     
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div className="container mb-3">
                <LinkContainer to="/">
                    <Navbar.Brand>Hasan Siam</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkContainer to="/home">
                            <Nav.Link className="mx-3 p-3">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link className="mx-3 p-3">About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/projects">
                            <Nav.Link className="mx-3 p-3">Projects</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link className="mx-3 p-3">Contact</Nav.Link>
                        </LinkContainer>
                          <LinkContainer to="/resume">
                            <Nav.Link className="mx-3 p-3">Resume</Nav.Link>
                        </LinkContainer>
                   
                    </Nav>
                    
                </Navbar.Collapse>
                </div>
            </Navbar>

   
    )
}

export default MyNavbar;
