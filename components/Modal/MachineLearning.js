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

import { machineLearning } from '@/data/imagesPath'

const MachineLearning = () => {
  return (
    <div>
      <div className='d-flex justify-content-end'>
        <a
          target='_blank'
          href='https://github.com/astra-media/opencv-facial_expression'
        >
          <Button className='info'>VISIT GITHUB</Button>
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
          el: '#machineLearning-pagination',
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {machineLearning.length > 0 && (
          <>
            {machineLearning.map((image, index) => (
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
        id='machineLearning-pagination'
        style={{
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          cursor: 'pointer',
        }}
      />

      <br />
      <h4>About this Project:</h4>
      <p>
        {`This machine learning project, developed as part of my capstone project
        in 2018, utilizes Python, OpenCV (Open Source Computer Vision Library),
        and face datasets to train a computer to recognize human facial
        expressions. The goal was to classify emotions into four categories:
        "angry," "happy," "sad," and "neutral," and detect these expressions in
        real time.`}
        <br />
        <br />
        In addition to using OpenCV, I integrated TouchDesigner by Derivative, a
        visual programming language, to create real-time interactive animations
        based on facial expressions. The trained model sends data through a
        socket (networking interface), which TouchDesigner then uses to generate
        interactive visuals corresponding to each emotion.
      </p>
      <h4>Operation:</h4>
      <p>
        Once all required modules are installed, the following commands can be
        used:
        <ul>
          <li>
            {`'recogniser_trainer\\python emotionrecogniser.py --update' to train the
            model.`}
          </li>
          <li>
            {`'recogniser_trainer\\python emotionrecogniser.py' to detect facial
            expressions in real time.`}
          </li>
          <li>
            {`'interactive_animation_2024.toe' for real-time interactive animation.`}
          </li>
        </ul>
      </p>
      <p>
        {`The code was later modified to be compatible with the latest versions of
        Python and OpenCV. The project code is hosted in a public repository on
        my GitHub page. This project was inspired by Paul van Gent's "Making an
        Emotion-Aware Music Player."`}
      </p>
      <h4>Technical Sheet:</h4>
      <p>
        The following technologies were utilized in this project:
        <ul>
          <li>Python 3.12.4</li>
          <li>
            Modules:
            <ul>
              <li>opencv-python 4.10.0.84</li>
              <li>opencv-contrib-python 4.10.0.84</li>
            </ul>
          </li>
          <li>TouchDesigner by Derivative</li>
        </ul>
      </p>
      <h4>Reference:</h4>
      <p>
        {`van Gent, P. (2016). Emotion Recognition With Python, OpenCV, and a Face
        Dataset. A tech blog about fun things with Python and embedded
        electronics. Retrieved from: Paul van Gent's blog`}
      </p>
    </div>
  )
}

export default MachineLearning
