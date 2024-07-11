import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard'

import Portfolio from './Modal/Portfolio'
import SmartThermostat from './Modal/SmartThermostat'

const OtherProjects = () => {
  return (
    <div className='p-3'>
      <p>Click on the cards below to see full project details</p>
      <Row>
        <Col xs={6} sm={6} md={4} lg={4} xl={3}>
          <ProjectCard
            image={'/images/portfolio/portfolioCard.png'}
            title={'Portfolio'}
            description={
              'Proident esse amet eu cupidatat proident laboris culpa ut. Dolor est excepteur laborum adipisicing Lorem dolore aliqua velit proident voluptate esse esse do qui. Commodo cillum elit adipisicing duis. Nulla ipsum reprehenderit nostrud aliquip do ad aliqua cupidatat ea sint dolore esse veniam qui.'
            }
            modalComponent={<Portfolio />}
          />
        </Col>
        <Col xs={6} sm={6} md={4} lg={4} xl={3}>
          <ProjectCard
            image={'/images/portfolio/portfolioCard.png'}
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
