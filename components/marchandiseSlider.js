import Image from 'next/image'
import { Carousel, Row, Col, Button, Figure } from 'react-bootstrap';
import Prod1 from '../assets/images/img_prod_1.png'

export const MarchandiseSlider = () => {
    return (
        <Carousel interval={100000000} controls={false}>
            <Carousel.Item>
                <Row>
                    <Col md={6}>
                        <Figure>
                            <Image className="d-block" src={Prod1} alt="First slide" />
                        </Figure>
                    </Col>
                    <Col md={6}>
                        <Carousel.Caption>
                            <h3>Title</h3>
                            <p>örem ipsum diasam hotörade påsm trinetik. Pårad soligt, kosam diren båskapet bel. Syngen skimma manas vattkoppsgodis, och disamma, oaktat plad mobilzombie. Trininar sper eller mikror även om dekanade konnetik. Supranyvinaen.</p>
                            <h4>$140</h4>
                            <Button>Buy</Button>
                        </Carousel.Caption>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <Col md={6}>
                        <Figure>
                            <Image className="d-block" src={Prod1} alt="First slide" />
                        </Figure>
                    </Col>
                    <Col md={6}>
                        <Carousel.Caption>
                            <h3>Title</h3>
                            <p>örem ipsum diasam hotörade påsm trinetik. Pårad soligt, kosam diren båskapet bel. Syngen skimma manas vattkoppsgodis, och disamma, oaktat plad mobilzombie. Trininar sper eller mikror även om dekanade konnetik. Supranyvinaen.</p>
                            <h4>$140</h4>
                            <Button>Buy</Button>
                        </Carousel.Caption>
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>
    )
}
