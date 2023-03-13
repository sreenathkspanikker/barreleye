import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import Logo from "../assets/images/logo.svg";
import globalConfig from "../utils/global.cong.json";
import { Banner } from './'

export const Header = () => {
    const [scrollActive, setScrollActive] = useState(null);
    const [bigMenu, setMenu] = useState(false);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            //   const direction = scrollY > lastScrollY ? "down" : "up";
            //   if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
            //     setScrollDirection(direction);
            //   }
            lastScrollY = scrollY > 0 ? scrollY : 0;
            setScrollActive(lastScrollY)
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollActive]);

    const handleClick = () => setMenu(bigMenu => !bigMenu)

    return (
        <header className={`app-header ${scrollActive > 50 ? "scroll-active" : ""} ${bigMenu ? 'show' : 'hide'}`}>
            {globalConfig?.banner?.enable && <Banner data={globalConfig?.banner} />}
            <Navbar expand="lg">
                <Container>
                    <Link className='navbar-brand' href="/">
                        <Image src={Logo} alt={"Logo"} />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleClick} />
                    <Navbar className="justify-content-end nav-main">
                        <div className='menu-wrap'>

                            <Nav className={`justify-content-end nav-social ${scrollActive < 50 ? 'show' : 'hide'}`}>
                                <Link className='nav-link' href="/">
                                    <i className='icon icon-facebook' />
                                </Link>
                                <Link className='nav-link' href="/">
                                    <i className='icon icon-linkedin' />
                                </Link>
                                <Link className='nav-link' href="/">
                                    <i className='icon icon-youtube' />
                                </Link>
                            </Nav>

                            <Nav className="ml-auto">
                                <Link
                                    className='nav-link'
                                    href={{
                                        pathname: '/about',
                                        query: { slug: 'about', title: 'About' },
                                    }}>About</Link>
                                <NavDropdown title="Courses" id="dropdown-1">

                                    <Link
                                        className='nav-link'
                                        href={{
                                            pathname: '/list',
                                            query: { slug: 'bachelors', title: 'Bachelors Program' }
                                        }} > <NavDropdown.Item as="span">Bachelors</NavDropdown.Item>
                                    </Link>
                                    <Link
                                        className='nav-link'
                                        href={{
                                            pathname: '/list',
                                            query: { slug: 'masters', title: 'Masters Program' }
                                        }} > <NavDropdown.Item as="span">Masters</NavDropdown.Item>
                                    </Link>
                                    {/* <Link
                                        className='nav-link'
                                        href={{
                                            pathname: '/list',
                                            query: { slug: 'phd', title: 'PHD' },
                                        }} > <NavDropdown.Item as="span">PHD</NavDropdown.Item>
                                    </Link> */}
                                </NavDropdown>

                                <NavDropdown title="Jobs" id="dropdown-2">
                                    <Link
                                        className='nav-link'
                                        href={{
                                            pathname: '/list',
                                            query: { slug: 'IT', title: 'IT' },
                                        }} > <NavDropdown.Item as="span">IT</NavDropdown.Item>
                                    </Link>
                                    <Link
                                        className='nav-link'
                                        href={{
                                            pathname: '/list',
                                            query: { slug: 'Other', title: 'Other' },
                                        }} > <NavDropdown.Item as="span">Other</NavDropdown.Item>
                                    </Link>
                                </NavDropdown>

                                <Link
                                    className='nav-link'
                                    href={{
                                        pathname: '/list',
                                        query: { slug: 'place_to_visit', title: 'Places to visit' },
                                    }}>Places to visit</Link>

                                <Link
                                    className='nav-link'
                                    href={{
                                        pathname: '/careerGuidance',
                                        query: { title: 'Career Guidance' },
                                    }}>Career Guidance</Link>
                                <Link
                                    className='nav-link'
                                    href={{
                                        pathname: '/faq',
                                        query: { title: 'FAQ' },
                                    }}>FAQ</Link>
                                <Link
                                    className='nav-link'
                                    href={{
                                        pathname: '/contact',
                                        query: { title: 'Contact' },
                                    }}>Connect</Link>
                            </Nav>
                        </div>
                    </Navbar>
                </Container>
            </Navbar>
        </header>

    )
}
