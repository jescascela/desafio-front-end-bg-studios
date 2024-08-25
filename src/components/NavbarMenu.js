import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function NavbarMenu() {
  return (
    <>
      <Navbar className="bg-body-tertiary mb-4">
        <Container>
            <LinkContainer to="/">
                <Navbar.Brand>
                    <img
                    alt="The Dog API"
                    src="/img/thedogapi-logo.png"
                    className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
            </LinkContainer>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
                <Nav.Link>Sobre</Nav.Link>
            </LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarMenu