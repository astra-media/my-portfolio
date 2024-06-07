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

const Header = ({ setScrollTo }) => {
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
                <span className='title'>M. Sakeeb</span>
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
              <Nav
                className='justify-content-end flex-grow-1 pe-3'
                onClick={() => setShow(false)}
              >
                <span onClick={() => setScrollTo('about')} className='navTitle'>
                  About
                </span>
                <br />
                <span
                  onClick={() => setScrollTo('skills')}
                  className='navTitle'
                >
                  Skills
                </span>
                <br />

                <span
                  onClick={() => setScrollTo('portfolio')}
                  className='navTitle'
                >
                  Portfolio
                </span>
                <br />
                <span
                  onClick={() => setScrollTo('contact')}
                  className='navTitle'
                >
                  Contact
                </span>
                <br />
                <span
                  onClick={() => setScrollTo('social')}
                  className='navTitle'
                >
                  Social
                </span>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </>
      </Navbar>
    </>
  )
}

export default Header
