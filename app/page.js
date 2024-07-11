'use client'

import { useRef, useState, useEffect } from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import VariableZ from '@/components/VariableZ'
import OtherProjects from '@/components/OtherProjects'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'

const Home = () => {
  const [scrollTo, setScrollTo] = useState('')

  const about = useRef()
  const portfolio = useRef()
  const resume = useRef()
  const contact = useRef()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const paramValue = params.get('scroll')

    setScrollTo(paramValue)

    if (scrollTo) {
      ExecuteScroll(scrollTo)
    }
  }, [scrollTo])

  const ExecuteScroll = (x) => {
    if (x == 'about') {
      about.current?.scrollIntoView()
    }
    if (x == 'portfolio') {
      portfolio.current?.scrollIntoView()
    }
    if (x == 'resume') {
      resume.current?.scrollIntoView()
    }
    if (x == 'contact') {
      contact.current?.scrollIntoView()
    }
  }

  useGSAP(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin)

    let t1 = gsap.timeline()
    t1.to('#blankScreen', {
      xPercent: '-100',
      duration: 1.5,
    })
      .from(
        ['#title-1', '#title-2', '#title-3'], //grouped in array
        {
          opacity: 0,
          y: '+=30',
          stagger: 0.5, //allows each animation from array to have slight delay
        }
      )
      .to(['#title-1', '#title-2', '#title-3'], {
        opacity: 0,
        y: '-=30',
        delay: 0.3,
        stagger: 0.5,
      })
      .to('#intro-slider', {
        xPercent: '-100',
        duration: 1.3,
      })
      .from('#welcome', {
        opacity: 0,
        duration: 1.5,
      })
      .to('#welcome', {
        opacity: 0,
        yPercent: '-100',
        duration: 1.3,
      })
      .from('#about', {
        opacity: 0,
        duration: 0.5,
      })
      .from('.aboutText1', {
        text: '',
        duration: 0.8,
      })
      .from('.aboutText2', {
        text: '',
        duration: 1,
      })
      .to('#scrollDown', {
        y: '+=20',
        ease: 'power1.inOut',
        yoyo: true,
        duration: 0.8,
        repeat: Infinity,
      })

    gsap.utils.toArray('.title').forEach((x, i) => {
      gsap.from(x, {
        scrollTrigger: {
          trigger: x,
          toggleActions: 'restart none none none',
        },
        delay: 0.1,
        opacity: 0,
        text: '-',
        duration: 0.5,
      })
    })
  }, {})

  return (
    <>
      <Header setScrollTo={setScrollTo} />
      <div className='relative' ref={about}>
        <div
          id='intro-slider'
          className='vh-100 vw-100 position-absolute top-0 left-0 d-flex flex-column justify-content-center gap-4 bg-secondary-subtle p-5'
        >
          <h1 id='title-1' className='display-1'>
            Software Engineer
          </h1>
          <h1 id='title-2' className='display-1'>
            Designer
          </h1>
          <h1 id='title-3' className='display-1'>
            Freelancer
          </h1>
        </div>

        <div
          id='about'
          className='vh-100 bg-secondary-subtle d-flex flex-column justify-content-between align-items-center'
          style={{ minHeight: '550px' }}
        >
          <div
            className='container d-flex flex-column align-items-center justify-content-center flex-grow-1'
            style={{ maxWidth: '700px' }}
          >
            <Card style={{ marginTop: '5vh' }}>
              <Card.Body>
                <Card.Title className='d-flex justify-content-center'>
                  <h4 className='aboutText1' style={{ fontSize: '20px' }}>
                    Hello, my name is M. Sakeeb.
                  </h4>
                </Card.Title>

                <Card.Text>
                  <span className='aboutText2'>
                    I am a full-stack web developer and UI/UX JavaScript
                    specialist with expertise in React, Next.js, and Express.js.
                    My preferred name is Zephyr. My primary focus is on building
                    intuitive and robust web applications. <br />
                    One of my standout projects is an e-commerce website that
                    demonstrates my ability to create seamless online shopping
                    experiences with modern web technologies. Additionally, I
                    have worked on various other projects that highlight my
                    diverse skill set beyond web development. <br />
                    Explore my e-commerce project and other notable works below.
                    Feel free to visit my{' '}
                    <a
                      target='_blank'
                      href='https://github.com/astra-media'
                      className='highlights'
                    >
                      GitHub
                    </a>{' '}
                    page for more examples of my work. For access to private
                    repositories or any inquiries, please reach out to me at{' '}
                    <a
                      href={`mailto: infiiinityx@gmail.com`}
                      className='highlights'
                    >
                      infiiinityx@gmail.com
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
            <div className='m-2'>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/zephyr-astra/'
              >
                <FontAwesomeIcon
                  style={{
                    fontSize: '25px',
                    marginRight: '10px',
                    cursor: 'pointer',
                  }}
                  icon={faLinkedin}
                />
              </a>
              <a target='_blank' href='https://github.com/astra-media'>
                <FontAwesomeIcon
                  style={{ fontSize: '25px', cursor: 'pointer' }}
                  icon={faGithub}
                />
              </a>
            </div>
          </div>

          <h5>SCROLL DOWN</h5>
          <div id='scrollDown' style={{ marginBottom: '100px' }}>
            <FontAwesomeIcon
              style={{ fontSize: '25px' }}
              icon={faChevronDown}
            />
          </div>
        </div>
        <div
          id='welcome'
          className='vh-100 vw-100 position-absolute top-0 left-0 d-flex justify-content-center align-items-center bg-secondary-subtle'
        >
          <h1 style={{ color: 'black', fontWeight: 'bold', fontSize: '60px' }}>
            Welcome
          </h1>
        </div>
        <div
          id='blankScreen'
          className='vh-100 vw-100 position-absolute top-0 left-0 bg-secondary-subtle'
        />
      </div>
      <br />

      <Container>
        <div ref={portfolio} id='portfolio'>
          <h4 style={{ textDecoration: 'underLine' }}>Portfolio</h4>
          <VariableZ />
          <hr style={{ width: '50%' }} />
          <h4 style={{ textDecoration: 'underLine' }}>Other Projects</h4>

          <OtherProjects />
        </div>

        <hr />
        <div ref={resume}>
          <h4 style={{ textDecoration: 'underLine' }}>Resume</h4>
          <Resume />
        </div>
        <hr />
        <div ref={contact}>
          <Contact />
        </div>
      </Container>
    </>
  )
}

export default Home
