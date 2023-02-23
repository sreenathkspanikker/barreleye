import { Container, Nav } from "react-bootstrap";

export const Footer = () => (
    <div className="app-footer">
        <Container>
            <p>Copyright @barreleye</p>
            <Nav onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                <Nav.Item>
                    <Nav.Link href="/home">Courses </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Jobs </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Place to visit</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Other services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">FAQ</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-5">Connect</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    </div>
)
