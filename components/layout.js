import Head from 'next/head';
import { Header, Mainframe, Footer } from './'

export const Layout = ({ children, Component }) => {
    return (
        <>
            <Head>
                <title>Barreleye</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={`app-layout ${Component}`}>
                <Header />
                <div className='app-content'>
                    <Mainframe Component={Component}/>
                    {children}
                </div>
                <Footer />
            </main>
        </>
    )
}
