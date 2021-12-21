import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

export const MainPanel = (): JSX.Element => {
    
    return(
        <Container>

            <Row>

                <Col>
                
                    <Table>

                        <thead>

                            <th>
                                Author
                            </th>
                            <th>
                                Title
                            </th>
                            <th>
                                Publish Date
                            </th>
                            <th>
                                ISBN
                            </th>
                            <th>
                                Subject
                            </th>
                            <th>
                                Publisher
                            </th>

                        </thead>

                    </Table>

                </Col>

            </Row>

        </Container>
    );

};