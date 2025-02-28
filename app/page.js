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
  const projects = useRef()
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
    if (x == 'projects') {
      projects.current?.scrollIntoView()
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
    })
      .from(
        ['#title-1', '#title-2', '#title-3'], //grouped in array
        {
          opacity: 0,
          y: '+=30',
          stagger: 0.4, //allows each animation from array to have slight delay
        }
      )
      .to(['#title-1', '#title-2', '#title-3'], {
        color: '#d87d27',
        stagger: 0.4,
      })
      .to(['#title-1', '#title-2', '#title-3'], {
        opacity: 0,
        y: '-=30',
        delay: 0.3,
        stagger: 0.4,
      })
      .to('#intro-slider', {
        xPercent: '-100',
        duration: 1,
      })
      .from('#welcome', {
        opacity: 0,
        duration: 1.5,
      })
      .to('#welcome', {
        opacity: 0,
        yPercent: '-100',
        duration: 1,
      })
      .from('#about', {
        opacity: 0,
        duration: 0.5,
      })
      .from('.aboutText1', {
        text: '',
        duration: 1,
      })
      .from('.aboutText2', {
        text: '',
        duration: 2,
      })
      .from('#scrollDown', {
        opacity: 0,
        delay: 3,
        duration: 2,
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
          className='vh-100 vw-100 position-absolute top-0 left-0 d-flex flex-column justify-content-center align-items-center gap-4 bg-secondary-subtle'
        >
          <div>
            <h1
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: '50px',
                marginBottom: '40px',
              }}
              id='title-1'
            >
              Software Engineer
            </h1>
            <h1
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: '50px',
                marginBottom: '40px',
              }}
              id='title-2'
            >
              Designer
            </h1>
            <h1
              style={{ color: 'black', fontWeight: 'bold', fontSize: '50px' }}
              id='title-3'
            >
              Freelancer
            </h1>
          </div>
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
            <Card
              style={{
                marginTop: '5vh',
                borderWidth: '5px',
                borderColor: 'gray',
                borderRadius: '2%',
              }}
            >
              <Card.Body>
                <Card.Title className='d-flex justify-content-center'>
                  <h3 className='aboutText1' style={{ fontWeight: 'bolder' }}>
                    Hello, my name is Mohammad Sakeeb.
                  </h3>
                </Card.Title>

                <Card.Text>
                  <span className='aboutText2'>
                    I am a full-stack web developer and UI/UX JavaScript
                    specialist with expertise in React, Next.js, and Express.js.
                    My primary focus is on building intuitive and robust web
                    applications. <br />
                    One of my standout projects is an e-commerce website that
                    showcases my ability to create seamless online shopping
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
                      href={`mailto: mohammad@sakeeb.dev`}
                      className='highlights'
                    >
                      mohammad@sakeeb.dev
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
            <div className='m-2'>
              <a target='_blank' href='https://www.linkedin.com/in/msakeeb/'>
                <FontAwesomeIcon
                  className='add-shadow'
                  style={{
                    fontSize: '25px',
                    marginRight: '10px',
                    cursor: 'pointer',
                    color: '#0077B5',
                    backgroundColor: 'white',
                  }}
                  icon={faLinkedin}
                />
              </a>
              <a target='_blank' href='https://github.com/astra-media'>
                <FontAwesomeIcon
                  className='add-shadow'
                  style={{
                    fontSize: '25px',
                    cursor: 'pointer',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                  }}
                  icon={faGithub}
                />
              </a>
            </div>
          </div>

          <h5 id='scrollDown' className='mb-2' style={{ color: 'black' }}>
            SCROLL DOWN <FontAwesomeIcon icon={faChevronDown} />
          </h5>
        </div>
        <div
          id='welcome'
          className='vh-100 vw-100 position-absolute top-0 left-0 d-flex justify-content-center align-items-center bg-secondary-subtle'
        >
          <h1
            style={{ color: '#d87d27', fontWeight: 'bold', fontSize: '50px' }}
          >
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
        <div ref={projects} id='projects'>
          <h3 style={{ fontWeight: 'bolder' }}>Projects</h3>
          <VariableZ />
          <hr style={{ width: '50%' }} />
          <h3 style={{ fontWeight: 'bolder' }}>Other Projects</h3>
          <OtherProjects />
        </div>

        <hr />
        <div ref={resume}>
          <h3 style={{ fontWeight: 'bolder' }}>Resume</h3>
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
