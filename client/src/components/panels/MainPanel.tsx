import React, { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { UseStateContext } from "../../service/context.users/UseStateContext";
import { Outlet, useNavigate } from "react-router-dom";
import { BookNavbar } from "../navbar/BookNavbar";

export const MainPanel = (): JSX.Element => {
    
    const { state } = UseStateContext();

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