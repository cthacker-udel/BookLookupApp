import React from "react";
import { Navbar, Container, Nav, ButtonToolbar, ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export const BookNavbar = () => {

    return(

        <Navbar bg="light" expand="lg">

            <Container>

                <Navbar.Brand>Book API</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>

                        <ButtonToolbar>

                            <ButtonGroup className="me-2">
                                <Link to="/book">
                                    <Button variant="outline-primary">
                                        Main Page
                                    </Button>
                                </Link>
                            </ButtonGroup>
                            <ButtonGroup className="me-2">
                                <Link to="/book/book-table">
                                    <Button variant="outline-primary">
                                        Book Table
                                    </Button>
                                </Link>
                            </ButtonGroup>
                            <ButtonGroup className="me-2">
                                <Link to="/book/add-book">
                                    <Button variant="outline-primary">
                                        Add Book
                                    </Button>
                                </Link>
                            </ButtonGroup>
                            <ButtonGroup className="me-2">
                                <Link to="/book/remove-book">
                                    <Button variant="outline-primary">
                                        Remove Book
                                    </Button>
                                </Link>
                            </ButtonGroup>
                        </ButtonToolbar>

                    </Nav>
                </Navbar.Collapse>

            </Container>

        </Navbar>


    );



};