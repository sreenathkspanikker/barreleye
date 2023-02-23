import Image from 'next/Image';
import Slider from "react-slick";

// images 
import Img1 from '../assets/images/ic-client-1.png'
import Img2 from '../assets/images/ic-client-2.png'
import Img3 from '../assets/images/ic-client-3.png'
import Img4 from '../assets/images/ic-client-4.png'

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
            <div><Image src={Img1} /></div>
            <div><Image src={Img2} /></div>
            <div><Image src={Img3} /></div>
            <div><Image src={Img4} /></div>
        </Slider>
    )
}
