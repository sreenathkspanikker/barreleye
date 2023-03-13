import Image from 'next/image';
import React, { useState } from 'react';
import { ListGroup, Row, Col, Card } from 'react-bootstrap';
import { Layout } from "../components";
import UserImg from "../assets/images/About/img-team-2.png";

export default function CareerGuidance() {

    return (
        <Layout className="page-career-guidance">
            <Row>
                <Col sm={8} md={9}>
                    <div className='title'>
                        <h2>4BIDDEN SOLUTIONS - The Divine Feminine Perspective</h2>
                        <ul>
                            <li>
                                <i className='icon-calendar' />
                                <span className='wrap'>
                                    <b>Date and time</b>
                                    <span>Sun, March 12, 2023, 3:00 PM – 6:00 PM EDT</span>
                                </span>
                            </li>
                            <li>
                                <i className='icon-clock' />
                                <span className='wrap'>
                                    <b>Location</b>
                                    <span>Online</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className='description'>
                        <p>Join Creative Director of 4BK Elisabeth Hoekstra, Body Building World Champion Maria Carson, Franchise Guru Kika Wise, and Dr. Erin Fall Haskell of Forbes Millionaires as they discuss SOLUTIONS for humanity.</p>
                        <ul>
                            <li>How do mainstream current events shape our reality?</li>
                            <li>How do mainstream current events shape our reality?</li>
                            <li>How do mainstream current events shape our reality?</li>
                            <li>How do mainstream current events shape our reality?</li>
                            <li>How do mainstream current events shape our reality?</li>
                        </ul>
                    </div>
                    <div className='more-details'>
                        <h4>More details</h4>
                        <ul>
                            <li><b>Sen your details:</b> xyz@barreleye.com</li>
                            <li><b>Deadline to apply:</b> 2/12/2023</li>
                            <li><b>Max attendees:</b> 100</li>
                            <li><b>Duration:</b> 1 hour</li>
                        </ul>
                    </div>
                </Col>
                <Col sm={4} md={3}>
                    <div className='user-profile'>
                        <h4>About the organizer</h4>
                        <Card>
                            <Image src={UserImg} className='img-fluid' />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">LinkedIn</Card.Link>
                                <Card.Link href="#">FaceBook</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Layout>
    );
};
