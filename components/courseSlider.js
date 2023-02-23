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
                breakpoint: 600,
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
            <Card.Img variant="top" src="https://picsum.photos/id/327/400/350" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
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
