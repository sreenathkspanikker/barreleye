import { useState, useEffect } from 'react';
import Image from 'next/Image';
import Link from 'next/link'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import Logo from "../assets/images/logo.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
    // const [scrollDirection, setScrollDirection] = useState(null);
    const [scrollActive, setScrollActive] = useState(null);

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

    return (
        <header className={`app-header ${scrollActive > 50 ? "scroll-active" : ""}`}>
            <Navbar expand="lg">
                <Container>
                    <Link className='navbar-brand' href="/">
                        <Image src={Logo} />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <div className='menu-wrap'>

                            {scrollActive < 50 &&
                                <Nav className="justify-content-end nav-social">
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
                            }

                            <Nav className="ml-auto">
                                <NavDropdown title="Courses" id="dropdown-1">
                                    <Link 
                                        className='nav-link' 
                                        href={{
                                            pathname: '/list',
                                            query: { slug: 'bachelors', title: 'Bachelors Program' }
                                    }} > Bachelors </Link>
                                    <Link 
                                        className='nav-link' 
                                        href={{
                                            pathname: '/list',
                                            query: { slug: 'masters', title: 'Masters Program' }
                                    }} > Masters </Link>
                                    <Link 
                                        className='nav-link' 
                                        href={{
                                            pathname: '/list',
                                            query: { slug: 'phd', title: 'PHD' },
                                        }} > PHD </Link>
                                </NavDropdown>

                                <NavDropdown title="Jobs" id="dropdown-2">
                                    <Link 
                                        className='nav-link' 
                                        href={{
                                            pathname: '/list',
                                            query: { slug: 'IT', title: 'IT' },
                                        }} > IT </Link>
                                    <Link 
                                        className='nav-link' 
                                        href={{
                                            pathname: '/list',
                                            query: { slug: 'Other', title: 'Other' },
                                        }} > Other </Link>
                                </NavDropdown>

                                <Link 
                                    className='nav-link' 
                                    href={{
                                        pathname: '/list',
                                        query: { slug: 'place_to_visit', title: 'Places to visit' },
                                    }}>Places to visit</Link>

                                <NavDropdown title="Other services" id="dropdown-3">
                                    <Link 
                                        className='nav-link' 
                                        href={{
                                            pathname: '/list',
                                            query: { slug: 'Career_Guidance', title: 'Career Guidance' },
                                        }}> Career Guidance </Link>
                                    <Link 
                                        className='nav-link' 
                                        href={{
                                            pathname: '/list',
                                            query: { slug: 'Online_Trainings', title: 'Online Trainings' },
                                        }}> Online Trainings </Link>
                                </NavDropdown>

                                <Link 
                                    className='nav-link' 
                                    href={{
                                        pathname: '/faq',
                                        query: { slug: 'faq', title: 'FAQ' }
                                    }}>FAQ</Link>
                                <Link 
                                    className='nav-link'                                     
                                    href={{
                                        pathname: '/contact',
                                        query: { slug: 'contact', title: 'Conatct' }
                                    }}>Connect</Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    )
}
