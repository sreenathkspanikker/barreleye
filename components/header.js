import Image from 'next/image'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import Logo from "../assets/images/logo.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons' 

export const Header = () => {
    return (
        <header className='app-header'>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src={Logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <div className='menu-wrap'>

                            <Nav className="justify-content-end">
                                <Nav.Link href="#home"><FontAwesomeIcon icon={faSmileBeam} /></Nav.Link>
                                <Nav.Link href="#home"><FontAwesomeIcon icon={faSmileBeam} /></Nav.Link>
                                <Nav.Link href="#home"><FontAwesomeIcon icon={faSmileBeam} /></Nav.Link>
                            </Nav>

                            <Nav className="ml-auto">
                                <NavDropdown title="Courses" id="dropdown-1">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Jobs" id="dropdown-2">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#home">Places to visit</Nav.Link>
                                <NavDropdown title="Other services" id="dropdown-3">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link href="#home">FAQ</Nav.Link>
                                <Nav.Link href="#link">Connect</Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    )
}
