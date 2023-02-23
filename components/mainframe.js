import { Container, Carousel, Fragment, Button } from "react-bootstrap"
import ImgOne from '../assets/images/bg-mainframe.jpg'

export const Mainframe = ({ Component }) => {

    const homeCarousel = () => (
        <Carousel interval={7000}>
            <Carousel.Item style={{ backgroundImage: `url(${ImgOne.src})` }}>
                <Container>
                    <Carousel.Caption>
                        <h4 className="brand-title">We take you in we make you win.</h4>
                        <h3>Agnostision kide. Dekaligen nyr.</h3>
                        <p>Antegt. Kroson multijöd. Oras kror. Diall prespelogi. Distansbatong bånegyment. Kvasin sens. Bojasa kaligen. Eurojamiligt igyganar. </p>
                        <Button>Read more</Button>
                    </Carousel.Caption>
                </Container>
            </Carousel.Item>

            <Carousel.Item style={{ backgroundImage: `url(${ImgOne.src})` }}>
                <Container>
                    <Carousel.Caption>
                        <h4 className="brand-title">We take you in we make you win.</h4>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button>Read more</Button>
                    </Carousel.Caption>
                </Container>
            </Carousel.Item>
        </Carousel>
    )

    return (
        <div className="app-mainframe">
            {Component === 'Home' ? homeCarousel() : <Container></Container>}
        </div>
    )
}
