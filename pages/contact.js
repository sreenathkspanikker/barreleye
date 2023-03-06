import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Section } from "../components";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
        message: '',
    });

    const { firstName, lastName, phoneNumber, emailAddress, message } = formData;

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/contact', formData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Section className="section-conatct-one">
            <Row>
                <Col sm={5}>
                    <div className='contact-content'>
                        <h2>Want to learn more?</h2>
                        <div className='list'>
                            <h4>Address</h4>
                            <h6>Latvia</h6>
                            <p>Firsa Sadovnikova iela 19/5, <br />RIga. LV-1003</p>
                            <h6>India</h6>
                            <p>Sargam, Thodiyoor North PO,<br />Karunagapall, Kollam, <br />Kerala. 690523</p>
                        </div>
                        <div className='list'>
                            <a href="https://www.google.com/maps/search/Sargam,+Thodiyoor+North+PO,+Karunagapall,+Kollam,+Kerala.+690523/@9.06276,76.5158528,13z/data=!3m1!4b1" target="_blank"><i className='icon-pin animate__animated animate__infinite animate__wobble' /> Locate Us</a>
                        </div>
                    </div>
                </Col>
                <Col sm={7}>
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
                </Col>
            </Row>
        </Section>
    );
};
