import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import myImg from '../img/9.png'
const MyNavbar = () => {
    return (
     
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div className="container mb-3">
                <LinkContainer to="/">
                    <Navbar.Brand> <img style={{width: '50px', height: '50px', borderRadius: '50%', marginTop: '15px'}} src={myImg} alt=""/> </Navbar.Brand>
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
                        
                         <LinkContainer to="/blog">
                            <Nav.Link className="mx-3 p-3">Blog</Nav.Link>
                        </LinkContainer>
                      
                        <Nav.Link target="_blank" href="https://drive.google.com/file/d/16lU6OjZoD96_bjQaJ4Ql4sYR3d1UTlqw/view" className="mx-3 p-3"><FontAwesomeIcon icon={faDownload} /> Resume</Nav.Link>
                       
                   
                    </Nav>
                    
                </Navbar.Collapse>
                </div>
            </Navbar>

   
    )
}

export default MyNavbar;
