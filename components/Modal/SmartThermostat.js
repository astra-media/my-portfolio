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

import { smartThermostat } from '@/data/imagesPath'

const SmartThermostat = () => {
  return (
    <div>
      <div className='d-flex justify-content-end'>
        <a
          target='_blank'
          href='https://github.com/astra-media/smart-thermostat-IoT'
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
          el: '#smartThermostat-pagination',
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {smartThermostat.length > 0 && (
          <>
            {smartThermostat.map((image, index) => (
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
        id='smartThermostat-pagination'
        style={{
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          cursor: 'pointer',
        }}
      />

      <br />
      <h5>About this Project</h5>
      <p>
        This IoT project allows users to remotely control the temperature and
        power state of their existing air conditioners without modifying the A/C
        control unit, making it a non-invasive and safe solution. The goal is to
        help users save energy in the long run. The project is based on the
        Arduino IoT Cloud service, utilizing an ESP-32 development board. The
        code includes Alexa-compatible variables, enabling control via Amazon
        Alexa.
        <br />
        <br />
        {`The ESP-32's dual-core CPU provides the flexibility to run two separate
        loops simultaneously, allowing for uninterrupted user inputs while
        managing and controlling the A/C's state. The board's multiple analog
        inputs are ideal for reading data from various sensors.`}
        <br />
        <br />
        One core of the ESP-32 handles cloud services and user inputs, while the
        other core is responsible for controlling the A/C based on user-set
        values. Note that the code includes variables for controlling other
        devices, which are not covered in this section.
      </p>
      <h5>Operation</h5>
      <p>
        {`To control the A/C, the project uses IR remote commands. The NEC
        protocol is used to obtain the necessary IR codes from the A/C remote
        via the serial monitor with the IRremote_command code. Only the power
        button code is needed for this setup. The A/C's temperature is set to
        its lowest, as the ESP-32 externally monitors and controls the
        temperature.`}
        <br />
        <br />
        {`The ESP-32 utilizes a photoresistor, IR LED, and DHT11 sensors to
        control the A/C based on the set temperature. The photoresistor detects
        the A/C's power state by observing the power LED. If the A/C needs to be
        turned on or off, the IR LED sends the appropriate NEC command. The
        DHT11 sensor reads the room temperature, and the ESP-32 sends commands
        through the IR LED to turn the A/C on or off based on the room
        temperature relative to the set temperature.`}
        <br />
        <br />
        All necessary information is displayed on an LCD, and the board includes
        push-buttons for local A/C control.
        <br />
        <br />
        The code for this project is hosted in a public repository. Feel free to
        explore it on my GitHub page.
      </p>
      <h5>Technical Sheet</h5>
      <p>
        {`The following components were utilized in this project. For wiring
        details, please refer to each component's datasheet.`}
      </p>
      <ul>
        <li>ESP-32 Development Board</li>
        <li>DHT11 Humidity and Temperature Sensor</li>
        <li>Liquid Crystal Display (LCD)</li>
        <li>IR LED</li>
        <li>IR Receiver Module</li>
        <li>Photoresistor</li>
        <li>Push-buttons</li>
        <li>PCB Prototype Board</li>
      </ul>
    </div>
  )
}

export default SmartThermostat
