import React, { useState } from 'react'
import { Button, Image, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { variableZ } from '@/data/imagesPath'

const VariableZ = () => {
  return (
    <div className='p-3'>
      <h4>Variable Z: A Comprehensive Full-Stack E-Commerce Web Application</h4>

      <div className='d-flex justify-content-between'>
        <a target='_blank' href='https://www.variablezstore.com/'>
          <Button className='info'>VISIT THE WEBSITE</Button>
        </a>
        <div className='mx-2'>
          <a
            target='_blank'
            href='https://www.facebook.com/profile.php?id=61554236302602'
          >
            <FontAwesomeIcon
              style={{
                fontSize: '25px',
                marginRight: '10px',
                cursor: 'pointer',
              }}
              icon={faFacebook}
            />
          </a>
          <a target='_blank' href='https://www.instagram.com/variablezstore/'>
            <FontAwesomeIcon
              style={{ fontSize: '25px', cursor: 'pointer' }}
              icon={faInstagram}
            />
          </a>
        </div>
      </div>

      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-navigation-size': '25px',
          padding: '5px',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(230, 230, 250, 0.1)',
          marginTop: '5px',
        }}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          el: '#variableZ-pagination',
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {variableZ.length > 0 && (
          <>
            {variableZ.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  style={{
                    width: '100vh',
                    maxHeight: '65vh',
                    objectFit: 'contain',
                    cursor: 'pointer',
                  }}
                  src={image}
                  alt={'no image'}
                  fluid
                />
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
      <div
        id='variableZ-pagination'
        style={{
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          cursor: 'pointer',
        }}
      />
      <br />
      <h5>About this Project:</h5>
      <p>
        Variable Z is a full-stack e-commerce web application developed using
        Next.js and a custom Express server. This project, developed solely by
        me over the course of two years, aims to deliver a fully functional
        e-commerce platform from scratch, offering seamless online shopping
        experiences with cutting-edge web technologies.
        <br />
        <br />
        The application supports both physical and digital products, ensuring
        secure authentication for digital goods upon purchase. It also includes
        features for offering free and promotional products.
        <br />
        <br />
        This project incorporates robust data handling and security measures
        using MongoDB, JSON Web Tokens (jsonwebtoken), and bcrypt.js. It
        integrates popular services such as Google Login, PayPal, and Stripe
        (including Apple Pay and Google Pay) for secure and versatile payment
        options. Additionally, Nodemailer is used to automate email services for
        order confirmations, support requests, and password resets.
        <br />
        <br />
        An easy-to-use admin interface is provided for managing orders, support
        tickets, product edits, custom categories, and more.
        <br />
        <br />
        The code for this project is hosted in a private repository. If you are
        interested in discussing this project further, please feel free to reach
        out to me.
      </p>
      <h5>Technical Sheet:</h5>
      <p>The following technologies were utilized in this project:</p>
      <ul>
        <li>Next.js</li>
        <li>Redux Toolkit</li>
        <li>Express.js</li>
        <li>JSON Web Token (jsonwebtoken)</li>
        <li>Nodemailer</li>
        <li>Mongoose</li>
        <li>Stripe Payment Services</li>
        <li>PayPal Payment Services</li>
      </ul>
    </div>
  )
}

export default VariableZ
