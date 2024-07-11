import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <>
      <div>
        <div className='d-flex flex-column align-items-center p-3'>
          <h4 style={{ textDecoration: 'underLine' }}>Get in touch</h4>

          <p>
            If you wanna get in touch, talk to me about a project collaboration
            or just say hi, send an email to{' '}
            <a href={`mailto: infiiinityx@gmail.com`} className='highlights'>
              infiiinityx@gmail.com
            </a>
          </p>
          <h4>{`Let's get social`}</h4>
          <p>Follow me on LinkedIn, GitHub & YouTube</p>
          <div>
            <a target='_blank' href='https://www.linkedin.com/in/zephyr-astra/'>
              <FontAwesomeIcon
                style={{
                  fontSize: '25px',
                  cursor: 'pointer',
                  maxHeight: '25px',
                }}
                icon={faLinkedin}
              />
            </a>
            <a target='_blank' href='https://github.com/astra-media'>
              <FontAwesomeIcon
                style={{
                  fontSize: '25px',
                  marginInline: '10px',
                  cursor: 'pointer',
                  maxHeight: '25px',
                }}
                icon={faGithub}
              />
            </a>
            <a
              target='_blank'
              href='https://www.youtube.com/channel/UCj7-VMoP_39-fpTPh9MJJWg'
            >
              <FontAwesomeIcon
                style={{
                  fontSize: '25px',
                  cursor: 'pointer',
                  maxHeight: '25px',
                }}
                icon={faYoutube}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
