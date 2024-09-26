import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col } from 'react-bootstrap'

import {
  faLinkedin,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className='mb-2'>
      <Row>
        <Col sm={12} md={8}>
          <h2 style={{ fontWeight: 'bolder' }}>Get in touch</h2>
          <p>
            If you wanna get in touch, talk to me about a project collaboration
            or just say hi, send an email to{' '}
            <a href={`mailto: mohammad@sakeeb.dev`} className='highlights'>
              mohammad@sakeeb.dev
            </a>
          </p>
          <h5 style={{ color: 'black' }}>{`Let's get social`}</h5>
          <p>Follow me on LinkedIn, GitHub & YouTube</p>
          <div>
            <a target='_blank' href='https://www.linkedin.com/in/zephyr-astra/'>
              <FontAwesomeIcon
                className='add-shadow'
                style={{
                  fontSize: '25px',
                  cursor: 'pointer',
                  maxHeight: '25px',
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
                  marginInline: '10px',
                  cursor: 'pointer',
                  maxHeight: '25px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                }}
                icon={faGithub}
              />
            </a>
            <a
              target='_blank'
              href='https://www.youtube.com/channel/UCj7-VMoP_39-fpTPh9MJJWg'
            >
              <FontAwesomeIcon
                className='add-shadow'
                style={{
                  fontSize: '25px',
                  cursor: 'pointer',
                  maxHeight: '25px',
                  color: '#FF0000',
                  backgroundColor: 'white',
                }}
                icon={faYoutube}
              />
            </a>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className='d-flex justify-content-center'>
            <img
              src='/selfPortrait/selfPortrait.png'
              alt='Self Portrait'
              width='200'
              className='mt-2'
            ></img>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Contact
