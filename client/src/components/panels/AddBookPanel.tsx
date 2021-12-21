import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { UseStateContext } from "../../service/context.users/UseStateContext";
import { UseDispatchContext } from "../../service/context.users/UseDispatchContext";
import { useNavigate } from "react-router-dom";


export const AddBookPanel = () => {

    const { state } = UseStateContext();
    const { dispatch } = UseDispatchContext();

    const [author, setAuthor] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [publishDate, setPublishDate] = useState<string>("");
    const [isbn, setIsbn] = useState<number>(0);
    const [subject, setSubject] = useState<string>('');
    const [publisher, setPublisher] = useState<string>('');

    let navigate = useNavigate();

    const addBookHandler = () => {

        if (author !== "" && title !== "" && publishDate !== "" && isbn !== 0 && subject !== "" && publisher !== "") {
            dispatch({type: "addBook", payload: { ...state, addedBook: {
                author: author,
                title: title,
                publishDate: publishDate,
                isbn: isbn,
                subject: subject,
                publisher: publisher
            }}});
            navigate('/book/book-table');
        }

    }

    return(
        <>
            <br />
            <br />
            <Container>
                <Row>
                    <Col>
                        <Form>

                            <Form.Group className="mb-3" controlId="basicAuthor">
                                <Form.Label>
                                    Author
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter author here"
                                    onChange={(e) => {setAuthor(e.target.value)}}
                                    isValid={author !== ""}
                                    isInvalid={author === ""}
                                />
                                <Form.Control.Feedback type="valid">
                                    Looks Good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Must enter author
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="basicTitle">
                                <Form.Label>
                                    Title
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter title here"
                                    onChange={(e) => {setTitle(e.target.value)}}
                                    isValid={title !== ""}
                                    isInvalid={title === ""}
                                />
                                <Form.Control.Feedback type="valid">
                                    Looks Good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Must enter title
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="basicPublishDate">
                                <Form.Label>
                                    Publish Date
                                </Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="Enter title here"
                                    onChange={(e) => {setPublishDate(e.target.value)}}
                                    isValid={publishDate !== ""}
                                    isInvalid={publishDate === ""}
                                />
                                <Form.Control.Feedback type="valid">
                                    Looks Good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Must enter publish date
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="basicISBN">
                                <Form.Label>
                                    ISBN
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder={"0"}
                                    isValid={isbn !== 0}
                                    isInvalid={isbn === 0}
                                    onChange={(e) => {setIsbn(parseInt(e.target.value, 10))}}
                                />
                                <Form.Control.Feedback type="valid">
                                    Looks Good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Must enter ISBN
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="basicSubject">
                                <Form.Label>
                                    Subject
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={"Enter subject here"}
                                    isValid={subject.length > 0}
                                    isInvalid={subject.length === 0}
                                    onChange={(e) => {setSubject(e.target.value)}}
                                />
                                <Form.Control.Feedback type="valid">
                                    Looks Good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Must enter subject
                                </Form.Control.Feedback>
                            </Form.Group>

                            
                            <Form.Group className="mb-3" controlId="basicPublisher">
                                <Form.Label>
                                    Publisher
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={"Enter publisher here"}
                                    isValid={publisher.length > 0}
                                    isInvalid={publisher.length === 0}
                                    onChange={(e) => {setPublisher(e.target.value)}}
                                />
                                <Form.Control.Feedback type="valid">
                                    Looks good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Must enter publisher name
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Form>
                </Col>
            </Row>
            <Row style={{ textAlign: "center" }}>
                <Col>
                    <Button variant="outline-primary" onClick={() => addBookHandler()}>
                        Add Book
                    </Button>
                </Col>
            </Row>
            </Container>
        </>
    );


}