'use client'

import { useRef, useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Home = () => {
  const [scrollTo, setScrollTo] = useState(null)

  const about = useRef(null)
  const skills = useRef(null)
  const portfolio = useRef(null)
  const contact = useRef(null)
  const social = useRef(null)

  const comp1 = useRef()

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

  gsap.registerPlugin(useGSAP)

  useGSAP(
    () => {
      let t1 = gsap.timeline()
      t1.to('#white-foreground', {
        opacity: 0,
        xPercent: '-100',
      })
        .from('#intro-slider', { xPercent: '-100', duration: 1.3, delay: 0.3 })
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
    },
    { scope: comp1, dependencies: [] }
  )

  return (
    <>
      <div className='relative' ref={comp1}>
        <div
          id='white-foreground'
          className='vh-100 vw-100 position-absolute top-0 left-0 bg-secondary-subtle z-3'
        ></div>
        <div
          id='intro-slider'
          className='vh-100 vw-100 position-absolute top-0 left-0 d-flex flex-column gap-4 bg-secondary-subtle z-2 p-5'
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
        <div className='vh-100 d-flex justify-content-center align-items-center bg-secondary-subtle'>
          <h1
            id='welcome'
            style={{ color: 'black', fontWeight: 'bold', fontSize: '60px' }}
          >
            Welcome
          </h1>
        </div>
      </div>
      <br />
      <Container>
        <div>
          <h1 className='title' ref={about}>
            About
          </h1>
          <p>
            Sint aliquip anim elit consectetur ex tempor proident non deserunt.
            Officia commodo dolor ea id reprehenderit pariatur officia tempor
            est exercitation. Labore et sit veniam anim esse do minim sunt eu.
            Laboris eiusmod laboris pariatur nostrud. Sunt excepteur consequat
            pariatur cupidatat officia cillum ipsum magna tempor. Nulla proident
            elit pariatur incididunt aliqua do eu ipsum sunt elit exercitation
            deserunt proident.
          </p>
          <br />
          <br />

          <h1 className='title' ref={skills}>
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

          <h1 className='title' ref={portfolio}>
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

          <h1 className='title' ref={contact}>
            Contact
          </h1>
          <p>
            Aliqua ea sit anim et minim proident ut et sunt ea irure ipsum
            fugiat sunt. Ut irure nostrud consequat nisi consequat velit eiusmod
            id cupidatat id et voluptate Lorem. Anim ullamco excepteur mollit
            nostrud dolor ipsum non quis.
          </p>

          <br />
          <br />

          <h1 className='title' ref={social}>
            Social
          </h1>
          <p>
            Velit fugiat incididunt ex minim. Occaecat consectetur labore
            reprehenderit tempor velit deserunt officia commodo sit duis
            cupidatat tempor nostrud. Ea nostrud sint ad ipsum tempor incididunt
            laboris incididunt sint. Eu occaecat incididunt reprehenderit eu
            cupidatat ullamco eu Lorem. Anim sunt qui ipsum ullamco do
            adipisicing sint in nostrud esse reprehenderit consectetur sint.
            Duis enim id sint mollit laboris dolor consequat pariatur est
            deserunt. Incididunt occaecat voluptate officia magna minim.
          </p>
        </div>
      </Container>
    </>
  )
}

export default Home
