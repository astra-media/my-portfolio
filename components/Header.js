'use client'
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  Button,
} from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar
        key={false}
        expand={false}
        className='bg-primary'
        data-bs-theme='dark'
      >
        <Container fluid>
          <Navbar.Brand href='/'>
            <span className='title'>My Portfolio</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement='end'
            className='bg-primary'
            data-bs-theme='dark'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                <span className='title'>M. Sakeeb</span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <hr />
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link href='/?scroll=about'>
                  <span className='navTitle'>About</span>
                </Nav.Link>
                <Nav.Link href='/?scroll=skills'>
                  <span className='navTitle'>Skills</span>
                </Nav.Link>
                <Nav.Link href='/?scroll=projects'>
                  <span className='navTitle'>Projects</span>
                </Nav.Link>
                <Nav.Link href='/?scroll=contact'>
                  <span className='navTitle'>Contact</span>
                </Nav.Link>
                <Nav.Link href='/?scroll=social'>
                  <span className='navTitle'>Social</span>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
