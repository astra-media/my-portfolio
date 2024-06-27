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

import variableZImages from '@/data/variableZImages'

const Portfolio = () => {
  return (
    <div>
      <h4 className='title'>Variable Z - E Commerce Web Application</h4>
      <p>
        Variable Z is an e-commerce web app build with Next.js, redux,
        express.js, MongoDB
      </p>
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
          el: '.swiper-custom-pagination',
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {variableZImages.length > 0 && (
          <>
            {variableZImages.map((image, index) => (
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
        style={{
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          cursor: 'pointer',
        }}
        className='swiper-custom-pagination'
      />
      <br />
      <h4>About this project</h4>
      <p>
        Elit id elit irure enim aliquip. Do culpa ullamco eu ipsum dolor eu
        aliquip reprehenderit qui. Cupidatat tempor occaecat adipisicing aliquip
        et amet nulla laboris. Aliquip aute pariatur nostrud magna officia ea
        deserunt non aliqua occaecat consequat amet ad aliqua.
      </p>
      <h4>Technical Sheet</h4>
      <p>Code technologies I got involved with while working this project</p>
      <ul>
        <li>Next.js</li>
        <li>Redux Toolkit</li>
        <li>Express.js</li>
        <li>Jsonwebtoken</li>
        <li>Nodemailer</li>
        <li>Mongoose</li>
        <li>Stripe Payment Sevices</li>
        <li>Paypal Payment Services</li>
      </ul>
    </div>
  )
}

export default Portfolio
