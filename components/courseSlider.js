import Slider from "react-slick";
import { Card, Button } from 'react-bootstrap';

export const CourseSlider = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        centerPadding: "30px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const sliderCard = () => (
        <Card>
            <Card.Img variant="top" src="https://picsum.photos/id/327/400/350" alt={'1'} />
            <Card.Body>
                <Card.Title>Veterinary Medicine</Card.Title>
                <Card.Text>
                The European's pet love and care are famous and thus makes this profession a high demanding across Europe.
                </Card.Text>
                <Button variant="primary">Read more</Button>
            </Card.Body>
        </Card>
    )

    return (
        <Slider {...settings}>
            <div>
                {sliderCard()}
            </div>
            <div>
                {sliderCard()}
            </div>
            <div>
                {sliderCard()}
            </div>
            <div>
                {sliderCard()}
            </div>
            <div>
                {sliderCard()}
            </div>
            <div>
                {sliderCard()}
            </div>
            <div>
                {sliderCard()}
            </div>
            <div>
                {sliderCard()}
            </div>
        </Slider>
    )
}
