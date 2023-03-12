import Slider from "react-slick";
import Image from 'next/image';
import { useRouter } from 'next/router'
import { Card, Button } from 'react-bootstrap';
import TOP_COURSES from '../utils/topCourses.json'
import { SET_VALUES } from '../middleware'

export const CourseSlider = () => {
    const router = useRouter();

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

    return (
        <Slider {...settings}>
            {TOP_COURSES?.map((items, idx) => (
                <div key={idx}>
                    <Card>
                        <Image variant="top" src={require(`../assets/images/${items?.image}`)} alt={idx} className="img-fluid" />
                        <Card.Body>
                            <Card.Title>{items?.title}</Card.Title>
                            <Card.Text>
                                {items?.description}
                            </Card.Text>
                            <Button variant="primary"
                                onClick={() => {
                                    SET_VALUES('item_id', items.id);
                                    SET_VALUES('item_category', items.category);
                                    router.push({
                                        pathname: "/courseDdetails",
                                        query: { slug: items.id, title: items.title }
                                    })
                                }}>Read more</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </Slider>
    )
}
