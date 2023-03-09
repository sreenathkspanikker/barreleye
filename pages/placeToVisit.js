import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Row, Col, Figure } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { useRouter } from 'next/router'
import { Section } from "../components";
import { GET_VALUES } from "../middleware";

import PlaceDetails from '../utils/placeToVistit.json'

export default function PlaceToVisit() {
    const [data, setData] = useState({});

    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        const item_id = GET_VALUES('item_id');
        
        for (let index = 0; index < PlaceDetails.length; index++) {
            const element = PlaceDetails[index];
            if (element?.id === (parseInt(slug) || item_id)) {
                setData(element)
            }

        }
    }, [])

    return (
        <Section className="section-place-to-visit one">
            <Row>
                <Col md={8}>
                    <Figure>
                        {data?.id && <Image src={require(`../assets/images/${data?.details?.largeImg}`)} className="img-fluid" alt={`img-${data.id}`} />}

                    </Figure>
                </Col>
                <Col md={4}>
                    <div className='items'>
                        <h5>History</h5>
                        <p>{data?.details?.history}</p>
                    </div>
                    <div className='items'>
                        <h5>Address</h5>
                        <address>
                            {data?.details?.address}
                        </address>
                        <a className='btn btn-secondary' href={data?.details?.location} target="_blank">
                            <i className='icon-pin' />
                            Location Map
                        </a>
                    </div>
                </Col>
            </Row>
            <div className="content">
                <Fade bottom  >
                    {data?.details?.description?.map((items, idx) => <p key={idx}>{items}</p>)}
                </Fade>
            </div>
        </Section>
    )
}
