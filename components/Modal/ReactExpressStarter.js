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

import { reactExpressStarter } from '@/data/imagesPath'

const ReactExpressStarter = () => {
  return (
    <div>
      <div className='d-flex justify-content-end'>
        <a
          target='_blank'
          href='https://github.com/astra-media/react-express-starter.git'
        >
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
          el: '#reactExpressStarter-pagination',
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {reactExpressStarter.length > 0 && (
          <>
            {reactExpressStarter.map((image, index) => (
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
        id='reactExpressStarter-pagination'
        style={{
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          cursor: 'pointer',
        }}
      />

      <br />
      <h5>About this Project</h5>

      <>
        <p>
          A simple full-stack boilerplate template using{' '}
          <span style={{ fontWeight: 'bold' }}>
            Express, React + Vite, Redux Toolkit, and react-router-dom
          </span>
          .
          <br />
          This template provides a solid foundation for developing modern web
          applications.
        </p>
        <p>Feel free to customize or extend it as needed.</p>

        <h5>Features</h5>
        <ul>
          <li>
            Pre-configured with <code>@reduxjs/toolkit</code> and
            <code>react-router-dom</code>.
          </li>
          <li>
            Integrated with <code>react-bootstrap</code> for basic styling.
          </li>
          <li>Simple navigation with a Navbar and demo pages.</li>
          <li>
            Example of backend API calls using <code>{`createApi`}</code> from
            Redux Toolkit.
          </li>
          <li>
            Local storage handling using <code>{`createSlice`}</code> from Redux
            Toolkit.
          </li>
          <li>
            Backend setup with <code>concurrently</code> and{' '}
            <code>nodemon</code> for efficient development.
          </li>
          <li>Proxy configured for smooth API calls during development.</li>
          <li>Uses CORS middleware to handle cross-origin requests.</li>
        </ul>

        <h5>Directory Structure</h5>
        <pre>
          ├── backend/ # Express.js backend <br />
          ├── frontend/ # React + Vite frontend <br />
          ├── .env # Environment variables (NODE_ENV, PORT, etc.)
        </pre>

        <h5>Tech Stack</h5>
        <ul>
          <li>Frontend: React, Vite, Redux Toolkit, react-router-dom</li>
          <li>Backend: Express.js</li>
          <li>Styling: React-Bootstrap</li>
        </ul>

        <h5>Requirements</h5>
        <ul>
          <li>Node.js v18+</li>
          <li>Optional: React Developer Tools & Redux DevTools</li>
        </ul>

        <h5>Getting Started</h5>
        <pre>
          # Make copy of the repository <br />
          npx degit https://github.com/astra-media/react-express-starter.git
          example <br />
          cd ./example <br />
          <br />
          or <br /># Clone the repository <br />
          git clone https://github.com/astra-media/react-express-starter.git
          example <br />
          cd ./example <br />
          <br /># Install dependencies <br />
          npm install <br />
          cd frontend <br />
          npm install
        </pre>

        <h5>Running the Development Server</h5>
        <pre>npm run dev # Starts both frontend and backend servers</pre>
        <p>
          Backend runs on{' '}
          <span style={{ fontWeight: 'bold' }}>http://localhost:5000/</span>,
          frontend on{' '}
          <span style={{ fontWeight: 'bold' }}>http://localhost:5173/</span>.
        </p>

        <h5>Available Scripts</h5>
        <ul>
          <li>
            <code>npm start</code> - Runs backend on{' '}
            <code>http://localhost:5000</code>
          </li>
          <li>
            <code>npm run server</code> - Runs backend using Nodemon
          </li>
          <li>
            <code>npm run client</code> - Starts the frontend dev server
          </li>
          <li>
            <code>npm run dev</code> - Runs both frontend and backend
          </li>
          <li>
            <code>npm run build</code> - Bundles the app for production
          </li>
        </ul>

        <h5>License</h5>
        <p>
          This project is licensed under the MIT License. See the{' '}
          <a
            href='https://github.com/astra-media/react-express-starter/blob/main/License'
            target='_blank'
          >
            LICENSE{' '}
          </a>{' '}
          file for details.
        </p>
      </>
    </div>
  )
}

export default ReactExpressStarter
