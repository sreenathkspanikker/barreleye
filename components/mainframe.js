import { useEffect, useState } from 'react'
import { Fade } from 'react-reveal';
import { useRouter } from 'next/router'
import { Container } from "react-bootstrap"

export const Mainframe = ({ className }) => {
    const [pageTitle, setTitle] = useState("");
    const router = useRouter()
    const { title } = router.query

    useEffect(() => { setTitle(title) }, [title]);

    return (
        <div className="app-mainframe">
            {className === 'page-home' ?
                <div className='video-wrap'>
                    <Container>
                        <div className='contet-box'>
                            <Fade bottom >
                                <h4 className="brand-title">We take you in, we make you win.</h4>
                                <h3>Veterinary Medicine</h3>
                                <p>One Medicine - One Health' concept links human, animal and environmental health. At present this science is vital for animal protection, herd health, monitoring of widespread diseases and safe food production of animal origin. It is important for human health to provide careful monitoring of livestock health and emerging zoonotic diseases.</p>
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
