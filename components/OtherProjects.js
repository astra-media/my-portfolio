import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard'

import Portfolio from './Modal/Portfolio'
import SmartThermostat from './Modal/SmartThermostat'
import MachineLearning from './Modal/MachineLearning'

const OtherProjects = () => {
  return (
    <div>
      <p>Click on the cards below to see full project details</p>
      <Row>
        <Col xs={6} sm={6} md={4} lg={4} xl={3}>
          <ProjectCard
            image={'/images/portfolio/portfolio.jpg'}
            title={'Portfolio'}
            description={
              'This portfolio website, built with Next.js and exported as a static site, showcases my recent projects as a full-stack web developer and software engineer.'
            }
            modalComponent={<Portfolio />}
          />
        </Col>
        <Col xs={6} sm={6} md={4} lg={4} xl={3}>
          <ProjectCard
            image={'/images/smartThermostat/controllerBoard.jpg'}
            title={'Smart Thermostat for Air Conditioner - IoT Project'}
            description={
              'This IoT project allows users to remotely control the temperature and power state of their existing air conditioners without modifying the A/C control unit, making it a non-invasive and safe solution.'
            }
            modalComponent={<SmartThermostat />}
          />
        </Col>
        <Col xs={6} sm={6} md={4} lg={4} xl={3}>
          <ProjectCard
            image={'/images/machineLearning/happy.jpg'}
            title={'Machine Learning - Facial Expressions'}
            description={
              'This machine learning project, developed as part of my capstone project in 2018, utilizes Python, OpenCV (Open Source Computer Vision Library), and face datasets to train a computer to recognize human facial expressions.'
            }
            modalComponent={<MachineLearning />}
          />
        </Col>
      </Row>
      <br />
      <div>
        <h5 style={{ color: 'black' }}>Looking for more?</h5>
        <p>
          Feel free to visit my{' '}
          <a
            target='_blank'
            href='https://github.com/astra-media'
            className='highlights'
          >
            GitHub
          </a>{' '}
          page for more examples of my work.
        </p>
      </div>
    </div>
  )
}

export default OtherProjects
