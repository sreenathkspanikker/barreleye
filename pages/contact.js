import React, { useState } from 'react';
import { Form, Button, Row, Col, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { Layout, Section } from "../components";

export default function Contact() {
    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     phoneNumber: '',
    //     emailAddress: '',
    //     message: '',
    // });

    // const { firstName, lastName, phoneNumber, emailAddress, message } = formData;

    // const handleChange = (event) => {
    //     setFormData({ ...formData, [event.target.name]: event.target.value });
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios.post('/api/contact', formData)
    //         .then((response) => {
    //             console.log(response);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    return (
        <Layout className="page-contact">
            <Row>
                <Col sm={6}>
                    <div className='content-box list'>
                        <h4>In order to start the application process,  please send us the below documents to  <a href="mailto:study@barreleyesolutions.com">study@barreleyesolutions.com</a>. We will verify the documents are reach out to you in a day.</h4>
                        <ListGroup>
                            <ListGroup.Item>12th Certificate</ListGroup.Item>
                            <ListGroup.Item>10th Certificate </ListGroup.Item>
                            <ListGroup.Item>UG / PG Certificate</ListGroup.Item>
                            <ListGroup.Item>UG / PG Consolidated mark sheet</ListGroup.Item>
                            <ListGroup.Item>IELTS /TOEFL/MOI</ListGroup.Item>
                            <ListGroup.Item>Passport</ListGroup.Item>
                            <ListGroup.Item>Passport size photographs</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className='content-box details'>
                        <div className='account'>
                            <h4>Bank Account</h4>
                            <ListGroup>
                                <ListGroup.Item>
                                    <b>Account Name</b>
                                    <span>ABU HARIS</span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <b>Account No </b>
                                    <span>BX909U849RU0OE</span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <b>IFC</b>
                                    <span>IF0001</span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <b>Barnch</b>
                                    <span>JSDHJKDLSDFK</span>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                        <div className='list'>
                            <h4>Location</h4>
                            <address>
                                <h5>Latvia</h5>
                                <p>Firsa Sadovnikova iela 19/5, RIga. LV-1003</p>
                            </address>
                            <address>
                                <h5>India</h5>
                                <p>Sargam, Thodiyoor North PO, Karunagapall, Kollam, Kerala. 690523</p>
                            </address>
                        </div>
                        <div className='list'>
                            <a className='btn btn-primary' href="https://www.google.com/maps/search/Sargam,+Thodiyoor+North+PO,+Karunagapall,+Kollam,+Kerala.+690523/@9.06276,76.5158528,13z/data=!3m1!4b1" target="_blank"><i className='icon-pin' /> Locate Us</a>
                        </div>

                    </div>
                </Col>


                {/* <Col sm={7}>
                        <h2>Send a message</h2>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="firstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="firstName"
                                            value={firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="lastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="lastName"
                                            value={lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="phoneNumber">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            name="phoneNumber"
                                            value={phoneNumber}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="emailAddress">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="emailAddress"
                                            value={emailAddress}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group controlId="message">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="message"
                                    value={message}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col> */}
            </Row>

            <div className='mail_to'>
                <h3>If you would like to get a free consultation, contact us on</h3>
                <h4><a href="mailto:cunsult@barreleye.com">cunsult@barreleye.com</a></h4>
            </div>
        </Layout>
    );
};
