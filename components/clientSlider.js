import Image from 'next/image';
import Slider from "react-slick";

// images 
import ClientImg from '../utils/clients.json'

const basePath = '/assets/images/Client/'

export const ClientSlider = () => {
    var settings = {
        dots: true,
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

    return (
        <Slider {...settings}>
            {ClientImg?.map((items, idx) => <div key={idx}><Image src={require(`../assets/images/Client/${items}`)} className="img-fluid" /></div>)}
        </Slider>
    )
}
