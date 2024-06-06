'use client'
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  Button,
  CloseButton,
} from 'react-bootstrap'

import { useState } from 'react'

const Header = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Navbar
        key={false}
        expand={false}
        className='navbar d-flex justify-content-end position-fixed top-0 end-0 z-3'
        data-bs-theme='dark'
        style={{
          borderColor: 'transparent',
        }}
      >
        <>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${false}`}
            onClick={() => setShow(!show)}
            className='bg-primary'
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement='end'
            className='bg-primary'
            data-bs-theme='dark'
            show={show}
            onHide={() => setShow(false)}
          >
            <Offcanvas.Header>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                <Nav.Link href='/'>
                  <span className='title'>M. Sakeeb</span>
                </Nav.Link>
              </Offcanvas.Title>
              <CloseButton
                style={{ color: 'black' }}
                onClick={() => {
                  setShow(false)
                }}
              />
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
                <Nav.Link href='/?scroll=portfolio'>
                  <span className='navTitle'>Portfolio</span>
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
        </>
      </Navbar>
    </>
  )
}

export default Header
