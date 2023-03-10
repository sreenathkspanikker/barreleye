import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Col, Row, Button } from "react-bootstrap";
import { Layout } from "../components";
import { fetchApi } from "../middleware";

export default function JobDetails() {
    const [data, setData] = useState({})
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        const res = fetchApi(slug);
        setData(res?.details)
    }, [])

    return (
        <Layout className="page-job_details">
            <Row>
                <Col sm={8}>
                    <div className='title-box'>
                        <h3>Junior Solution Consultant</h3>
                        <ul>
                            <li><i className='icon-pin' />{data?.location}</li>
                            <li><i className='icon-clock' />{data?.postedOn}</li>
                        </ul>
                        <Button variant='secondary'>Apply</Button>
                    </div>
                    <div className='detail-box'>
                        <h5>About the role</h5>
                        <p>{data?.description}</p>
                        <h5>You bring that with you</h5>
                        <ul>
                            {data?.skills?.map((items, i) => <li key={i}>{items}</li>)}
                        </ul>
                        <h5>We offer you that</h5>
                        <ul>
                            {data?.weOffer?.map((items, i) => <li key={i}>{items}</li>)}
                        </ul>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className='detail-box detail-about'>
                        <h5>About Us</h5>
                        <p>{data?.about}</p>
                        <h6>Read more about us at <a href={data?.url} target="_bla
                        ">{data?.url}</a></h6>
                    </div>
                </Col>
            </Row>
        </Layout>
    )
}
