import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard'

import Portfolio from './Modal/Portfolio'
import SmartThermostat from './Modal/SmartThermostat'

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
            image={''}
            title={'Smart Thermostat - IOT Project'}
            description={
              'Eu laboris ea irure dolore ad id cupidatat laborum cupidatat. Aute laboris enim cillum excepteur et laboris ad ex anim elit nulla occaecat. In nostrud dolore minim id esse commodo deserunt proident in consequat elit aute consectetur minim. Amet dolor consequat non aliqua adipisicing in ipsum tempor anim nostrud ad id mollit. Sint anim sint velit irure sunt dolore.'
            }
            modalComponent={<SmartThermostat />}
          />
        </Col>
      </Row>
      <br />
      <div>
        <h4>Looking for more?</h4>
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
