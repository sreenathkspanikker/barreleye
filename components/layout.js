import Head from 'next/head';
import { WelcomeModal } from '../modules'
import { Header, Mainframe, Footer, WhatsApp } from './'

export const Layout = ({ children, className }) => {
    return (
        <>
            <Head>
                <title>Barreleye</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={`app-layout ${className}`}>
                <Header />
                <div className='app-content'>
                    <Mainframe className={className}/>
                    {children}
                </div>
                <Footer />
                <WhatsApp />
                <WelcomeModal />
            </main>
        </>
    )
}
