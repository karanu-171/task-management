import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom"

const Headers = () =>{
    return (
        <Navbar className="bg-primary">
          <Container>
            <Navbar.Brand as={Link} to={"/"} className="text-white">Task Master</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <Nav.Link as={Link} to={"/add"} className="text-white">
                  Add Task
                </Nav.Link>
            </Navbar.Text>
            </Navbar.Collapse>
         </Container>
        </Navbar>
    );
};

export default Headers;