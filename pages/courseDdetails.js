import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Fade } from 'react-reveal';
import Link from 'next/link'
import { Col, Row, Button } from "react-bootstrap";
import { Layout } from "../components";
import { fetchApi } from "../middleware";

export default function CourseDetails() {
    const [data, setData] = useState({})
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        const res = fetchApi(slug);
        console.log({ res });
        setData(res?.detial)
    }, [])

    return (
        <Layout className="page-course-details">
            <Row>
                <Col md={8}>
                    <div className="block block-1">
                        <Fade bottom  >
                            <div className='details'>
                                <p>{data?.description}</p>
                            </div>

                            <h5>Entry Requirements</h5>
                            <ol>
                                {data?.requirements?.map((items, i) => <li key={i}>{items}</li>)}
                            </ol>
                        </Fade>
                    </div>
                    <div className="block block-2">
                        <Fade bottom  >
                            <h5>Templates</h5>
                            <p>{data?.templates?.description}</p>
                        </Fade>
                        <Fade bottom  >
                            <Row className="mt-4">
                                <Col sm={4}>
                                    <a className='link' href={data?.templates?.youtube} target="_blank">
                                        <div className="box box-1">
                                            <i className="icon-youtube" />
                                            Self introduction
                                        </div>
                                    </a>
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
                                    <p>{data?.degree?.awarded}</p>
                                </div>
                            </div>
                            <div className="list">
                                <span className="icon-wrap">
                                    <i className="icon-clock" />
                                </span>
                                <div className="content">
                                    <h5>Duration:</h5>
                                    <p>{data?.degree?.duration}</p>
                                </div>
                            </div>
                            <div className="list">
                                <span className="icon-wrap">
                                    <i className="icon-euro" />
                                </span>
                                <div className="content">
                                    <h5>Tuition Fee:</h5>
                                    <p>{data?.degree?.tutionFee}</p>
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
