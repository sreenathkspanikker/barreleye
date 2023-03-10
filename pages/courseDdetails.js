import { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import Link from 'next/link'
import { Col, Row, Figure, Button } from "react-bootstrap";
import { Layout } from "../components";

export default function CourseDetails() {
    
    return (
        <Layout className="page-course-details">
            <Row>
                <Col md={8}>
                    <div className="block block-1">
                        <Fade bottom  >
                            <div className='details'>
                                <p>Lörem ipsum deras pamåtigt timent anastat: utom knarkometer för atektig, sunat. Gudade exomålig egisk miska i päfapp i hexassade androsiv. Öde eböment trevis annonsblockerare fåde. Båledes hidoligt benat fang åde. Vilogi fagon.
                                    Ses heterosade en endosiv. Befapägen sosk josyheten presanas. Podåktigt mononing. Farar begt jag bens lågongen ore. Spebunde måhöck rorat utan spesm, vövaliga nena. Du kan vara drabbad.
                                </p>
                            </div>

                            <h5>Entry Requirements</h5>
                            <ol>
                                <li>Cras justo odio</li>
                                <li>Dapibus ac facilisis in</li>
                                <li>Cras justo odio</li>
                                <li>Dapibus ac facilisis in</li>
                                <li>Cras justo odio</li>
                                <li>Dapibus ac facilisis in</li>
                            </ol>
                        </Fade>
                    </div>
                    <div className="block block-2">
                        <Fade bottom  >
                            <h5>Templates</h5>
                            <p>Lörem ipsum deras pamåtigt timent anastat: utom knarkometer för atektig, sunat. Gudade exomålig egisk miska i päfapp i hexassade androsiv. Öde eböment trevis annonsblockerare fåde. Båledes hidoligt benat fang åde.</p>
                        </Fade>
                        <Fade bottom  >
                            <Row className="mt-4">
                                <Col sm={4}>
                                    <div className="box box-1">
                                        <Figure>
                                            <Figure.Image src="https://picsum.photos/id/659/300/300" alt={"1"} />
                                            <Figure.Caption>
                                                <i className="icon-youtube" />
                                                Self introduction
                                            </Figure.Caption>
                                        </Figure>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="box box-2">
                                        <i className="icon-powerpoint" />CV
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="box box-3">
                                        <i className="icon-pdf" />Motivation Letter
                                    </div>
                                </Col>
                            </Row>
                            <Link className='btn btn-primary' href="/apply">Apply now</Link>
                        </Fade>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="block block-3">
                        <Fade bottom  >
                            <div className="list">
                                <span className="icon-wrap">
                                    <i className="icon-graduation-cap" />
                                </span>
                                <div className="content">
                                    <h5>Degree awarded:</h5>
                                    <p>Bachelor degree of Engineering Science in Environmental Engineering</p>
                                </div>
                            </div>
                            <div className="list">
                                <span className="icon-wrap">
                                    <i className="icon-clock" />
                                </span>
                                <div className="content">
                                    <h5>Duration:</h5>
                                    <p>3 years (full-time)</p>
                                </div>
                            </div>
                            <div className="list">
                                <span className="icon-wrap">
                                    <i className="icon-euro" />
                                </span>
                                <div className="content">
                                    <h5>Tuition Fee:</h5>
                                    <p>$5000</p>
                                </div>
                            </div>
                            <Button><span><i className="icon-file-text-o" /></span>Explore the faculty</Button>
                        </Fade>
                    </div>
                </Col>
            </Row>
        </Layout>
    )
}
