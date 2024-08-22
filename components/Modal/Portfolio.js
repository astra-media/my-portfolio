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

import { portfolio } from '@/data/imagesPath'

const Portfolio = () => {
  return (
    <div>
      <div className='d-flex justify-content-end'>
        <a target='_blank' href='https://github.com/astra-media/my-portfolio'>
          <Button className='button-style'>Visit GitHub</Button>
        </a>
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
          el: '#portfolio-pagination',
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {portfolio.length > 0 && (
          <>
            {portfolio.map((image, index) => (
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
        id='portfolio-pagination'
        style={{
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          cursor: 'pointer',
        }}
      />

      <br />
      <h5 style={{ color: 'black' }}>About this Project:</h5>
      <p>
        This portfolio website, built with Next.js and exported as a static
        site, showcases my recent projects as a full-stack web developer and
        software engineer.
        <br />
        <br />
        {`The objective of this project was to create a comprehensive display of
        my work from the past few years. I aimed for a minimalist UI, employing
        contemporary web technologies that are highly relevant in today's
        development landscape.`}
        <br />
        <br />
        The site features a simple navigation structure. Rather than multiple
        pages, I opted for a single-page layout. I used reference elements for
        smooth scrolling and modals to display content, ensuring a clutter-free
        interface.
        <br />
        <br />
        To enhance user experience, I integrated GSAP for seamless element
        transitions. Swiper.js was used for image showcasing, providing an
        excellent touch slider experience. React PDF Viewer ensures that PDF
        documents are displayed correctly across all devices, including iOS, PC,
        and Android.
        <br />
        <br />
        The code for this project is hosted in a public repository. Feel free to
        explore it on my GitHub page.
      </p>
      <h5 style={{ color: 'black' }}>Technical Sheet:</h5>
      <p>The following technologies were utilized in this project:</p>
      <ul>
        <li>Next.js</li>
        <li>GSAP</li>
        <li>React PDF Viewer</li>
        <li>Swiper</li>
      </ul>
    </div>
  )
}

export default Portfolio
