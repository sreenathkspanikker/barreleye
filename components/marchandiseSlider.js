import { Fade } from 'react-reveal';
import Image from 'next/image'
import { Carousel, Row, Col, Button, Figure } from 'react-bootstrap';
import Prod1 from '../assets/images/img_prod_1.png'

export const MarchandiseSlider = () => {
    return (
        <Carousel interval={100000000} indicators={false}>
            <Carousel.Item>
                <Row>
                    <Col md={6}>
                        <Figure>
                            <Image className="d-block" src={Prod1} alt="First slide"/>
                        </Figure>
                    </Col>
                    <Col md={6}>
                        <Carousel.Caption>
                            <Fade bottom  >
                                <h3>Barreleye Mug</h3>
                                <p>Enjoy every sip of your coffee from our elgant and stylist Barreleye Cup.</p>
                                <h4>$40</h4>
                                <Button>Buy</Button>
                            </Fade>
                        </Carousel.Caption>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <Col md={6}>
                        <Figure>
                            <Image className="d-block" src={Prod1} alt="First slide"/>
                        </Figure>
                    </Col>
                    <Col md={6}>
                        <Carousel.Caption>
                            <Fade bottom  >
                                <h3>Barreleye T-Shirt</h3>
                                <p>Show your pride with our brand printed quality T-shirts.</p>
                                <h4>$100</h4>
                                <Button>Buy</Button>
                            </Fade>
                        </Carousel.Caption>
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>
    )
}
