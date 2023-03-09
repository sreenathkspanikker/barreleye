import { useEffect, useState } from 'react'
import { Fade } from 'react-reveal';
import { useRouter } from 'next/router'
import { Container } from "react-bootstrap"

export const Mainframe = ({ Component }) => {
    const [pageTitle, setTitle] = useState("");
    const router = useRouter()
    const { title } = router.query

    useEffect(() => { setTitle(title);}, [title, Component]);

    console.log({Component});

    return (
        <div className="app-mainframe">
            {Component === 'Home' ?
                <div className='video-wrap'>
                    <Container>
                        <div className='contet-box'>
                            <Fade bottom >
                                <h4 className="brand-title">We take you in we make you win.</h4>
                                <h3>Agnostision kide. Dekaligen nyr.</h3>
                                <p>Antegt. Kroson multijöd. Oras kror. Diall prespelogi. Distansbatong bånegyment. Kvasin sens. Bojasa kaligen. Eurojamiligt igyganar. </p>
                                <a className="btn btn-primary" href="#about">Read more</a>
                            </Fade>
                        </div>
                    </Container>
                    <video
                        src={require('../assets/images/banner.mp4')}
                        style={{ width: '100%' }}
                        muted
                        autoPlay
                        loop
                    />
                </div>
                :
                <Container className='d-flex'><Fade top ><h2 className='mainframe-title'>{pageTitle}</h2></Fade></Container>}
        </div>
    )
}
