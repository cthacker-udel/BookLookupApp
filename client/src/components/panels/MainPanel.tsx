import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UseStateContext } from "../../service/context.users/UseStateContext";
import { Outlet } from "react-router-dom";
import { BookNavbar } from "../navbar/BookNavbar";

export const MainPanel = (): JSX.Element => {

    return(
        <>
        <Container>
            <Row>
                <Col>
                    <BookNavbar />
                </Col>
            </Row>
            <Row>
                <Col>
                   { 
                        <Outlet />
                   }
                </Col>
            </Row>
        </Container>
        </>
    );

};