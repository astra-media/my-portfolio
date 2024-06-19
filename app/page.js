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
import Link from 'next/link'

const Home = () => {
  const [scrollTo, setScrollTo] = useState('')

  const about = useRef()
  const skills = useRef()
  const portfolio = useRef()
  const contact = useRef()
  const social = useRef()

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
    if (x == 'skills') {
      skills.current?.scrollIntoView()
    }
    if (x == 'portfolio') {
      portfolio.current?.scrollIntoView()
    }
    if (x == 'contact') {
      contact.current?.scrollIntoView()
    }
    if (x == 'social') {
      social.current?.scrollIntoView()
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
        duration: 1.5,
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
          toggleActions: 'restart none restart none',
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
        >
          <div
            className='container d-flex flex-column align-items-center justify-content-center flex-grow-1'
            style={{ maxWidth: '600px' }}
          >
            <Card>
              <Card.Body>
                <Card.Title className='d-flex justify-content-center mb-0 pb-0'>
                  <h4 style={{ fontSize: '20px' }}>
                    Hello, my name is M. Sakeeb.
                  </h4>
                </Card.Title>
                <Card.Title className='d-flex justify-content-center'>
                  <h4 style={{ fontSize: '16px' }} className='fst-italic'>
                    {' '}
                    (Preferred - Zephyr)
                  </h4>
                </Card.Title>
                <Card.Text>
                  I am a full-stack web developer and UI/UX javascript
                  specialist. This page was build using Next.js. Codes are
                  available on my{' '}
                  <a
                    target='_blank'
                    href='https://github.com/astra-media/my-portfolio'
                    className='highlights'
                  >
                    GitHub page.
                  </a>{' '}
                  Feel free to take a look at my latest project on my{' '}
                  <span
                    onClick={() => setScrollTo('portfolio')}
                    className='highlights'
                  >
                    portfolio.
                  </span>
                </Card.Text>
                <Card.Text className='d-flex justify-content-center'>
                  <a
                    href={`mailto: this.zephyr@gmail.com`}
                    className='highlights'
                  >
                    this.zephyr@gmail.com
                  </a>
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
        <div>
          <h1 className='title' ref={portfolio} id='portfolio'>
            Portfolio
          </h1>
          <p>
            Enim aute officia aliquip dolor pariatur ut Lorem mollit qui duis
            tempor ea ullamco dolore. Mollit pariatur nisi incididunt magna anim
            est esse quis dolore voluptate laboris sit. Commodo culpa id aliquip
            anim eiusmod laborum elit. Eiusmod fugiat esse consectetur tempor
            est ipsum veniam labore tempor dolore amet. Pariatur et consectetur
            exercitation cupidatat Lorem dolor amet elit sit irure dolore aliqua
            eiusmod voluptate. Id incididunt consectetur culpa ex.
          </p>

          <br />
          <br />

          <h1 className='title' ref={skills} id='skills'>
            Skills
          </h1>

          <p>
            Occaecat elit adipisicing et dolore non sint. Ipsum fugiat ipsum qui
            in et ut mollit commodo. Culpa culpa officia officia aute occaecat
            consectetur ex aliqua velit officia. Adipisicing do magna aliqua
            dolore fugiat eiusmod aliquip cillum dolore nisi et occaecat non.
            Sit eiusmod commodo enim fugiat cillum. Nisi ad in anim nisi ullamco
            nostrud. Anim mollit anim velit non.
          </p>
          <br />
          <br />

          <h1 className='title' ref={contact}>
            Contact
          </h1>
          <p>
            Aliqua ea sit anim et minim proident ut et sunt ea irure ipsum
            fugiat sunt. Ut irure nostrud consequat nisi consequat velit eiusmod
            id cupidatat id et voluptate Lorem. Anim ullamco excepteur mollit
            nostrud dolor ipsum non quis.
          </p>
        </div>
      </Container>
    </>
  )
}

export default Home
