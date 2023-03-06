import Image from 'next/Image';
import Slider from "react-slick";

// images 
import Img1 from '../assets/images/img_clIent_1.jpg'
import Img2 from '../assets/images/img_clIent_2.jpg'
import Img3 from '../assets/images/img_clIent_3.jpg'
import Img4 from '../assets/images/img_clIent_4.jpg'

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
            <div><Image src={Img1} className="img-fluid" /></div>
            <div><Image src={Img2} className="img-fluid" /></div>
            <div><Image src={Img3} className="img-fluid" /></div>
            <div><Image src={Img4} className="img-fluid" /></div>
        </Slider>
    )
}
