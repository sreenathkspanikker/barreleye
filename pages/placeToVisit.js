import { useEffect, useState } from 'react';
import Image from 'next/Image';
import { Figure } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { useRouter } from 'next/router'
import { Section } from "../components";

import PlaceDetails from '../utils/placeToVistit.json'

export default function PlaceToVisit() {
    const [data, setData] = useState({})

    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        for (let index = 0; index < PlaceDetails.length; index++) {
            const element = PlaceDetails[index];
            if (element?.id === parseInt(slug)) {
                console.log({element});
                setData(element)
            }
            
        }
    }, [])
    
    return (
        <Section className="section-place-to-visit-one">
            {console.log({data})}
            <Figure>
                {data?.id && <Image src={require(`../assets/images/${data?.details?.largeImg}`)} className="img-fluid" alt={`img-${data.id}`} /> }
                
            </Figure>
            <div className="content">
                <Fade bottom  >
                    <h3>{data.title}</h3>
                </Fade>
            </div>
        </Section>
    )
}
