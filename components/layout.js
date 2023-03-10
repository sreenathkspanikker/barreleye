import { useState, useEffect, useCallback } from "react"
import Head from 'next/head';
import { Container } from "react-bootstrap";
import { WelcomeModal } from '../modules'
import { GET_VALUES } from "../middleware"
import globalConfig from "../utils/global.cong.json";
import { Header, Mainframe, Footer, WhatsApp } from './'

export const Layout = ({ children, className, conatiner }) => {
    const [show, setShow] = useState(true);
    
    useEffect(() => {
        const res = GET_VALUES('welcome');
        if (res !== null && res !== undefined) setShow(res);
    }, []);

    const modalAction = useCallback(() => {
        setShow(false);
    }, [show]);

    // listener content tray
    useEffect(() => {
        window.addEventListener('ModalShow', modalAction);
        return () => {
            window.removeEventListener('ModalShow', modalAction);
        };
    }, [modalAction]);

    return (
        <>
            <Head>
                <title>Barreleye</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={`app-layout ${className}`}>
                <Header />
                <div className='app-content'>
                    <Mainframe className={className} />
                    {(conatiner || conatiner === undefined) ? <Container> {children} </Container> : { children }}
                </div>
                <Footer />
                <WhatsApp />
                {(show && globalConfig?.modal?.enable) && <WelcomeModal show={show}/>}
            </main>
        </>
    )
}
