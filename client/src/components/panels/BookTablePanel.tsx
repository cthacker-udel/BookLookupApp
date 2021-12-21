import React from "react";
import { Table } from "react-bootstrap";
import { UseStateContext } from "../../service/context.users/UseStateContext";

export const BookTablePanel = (): JSX.Element => {
    
    const { state } = UseStateContext();

    console.log("state = ", state);

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
            <tbody>

                {
                    state.books.map((eachBook) => {

                        return(
                            <tr>
                                <td>
                                    {eachBook.author}
                                </td>
                                <td>
                                    {eachBook.title}
                                </td>
                                <td>
                                    {eachBook.publishDate}
                                </td>
                                <td>
                                    {eachBook.isbn}
                                </td>
                                <td>
                                    {eachBook.subject}
                                </td>
                                <td>
                                    {eachBook.publisher}
                                </td>
                            </tr>
                        );

                    })
                }

            </tbody>

        </Table>
    );

};