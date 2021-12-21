import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { UseStateContext } from "../../service/context.users/UseStateContext";
import { Outlet } from "react-router-dom";

export const BookTablePanel = (): JSX.Element => {
    
    const { state } = UseStateContext();

    return(
        <Table>

            <thead>
                <tr>
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
                </tr>
            </thead>

        </Table>
    );

};