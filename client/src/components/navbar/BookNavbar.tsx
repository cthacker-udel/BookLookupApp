import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";


export const BookNavbar = () => {

    return(

        <Navbar bg="light" expand="lg">

            <Container>

                <Navbar.Brand>Book API</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>

                        

                    </Nav>
                </Navbar.Collapse>

            </Container>

        </Navbar>


    );



};