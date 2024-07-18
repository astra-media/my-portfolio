import React, { useRef, useState } from 'react'
import { Card, Modal, Button } from 'react-bootstrap'
import styles from './ProjectCard.module.css'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const ProjectCard = ({ image, title, description, modalComponent }) => {
  const [show, setShow] = useState(false)

  const cardRef = useRef(null)
  const previewRef = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(useGSAP)
    const card = cardRef.current
    const preview = previewRef.current

    const handleMouseEnter = () => {
      gsap.to(preview, { opacity: 1, y: 0, duration: 0.3 })
    }
    const handleMouseLeave = () => {
      gsap.to(preview, { opacity: 0, y: '100%', duration: 0.3 })
    }
    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <Card
        ref={cardRef}
        className={`overflow-hidden`}
        style={{
          cursor: 'pointer',
          padding: '5px',
          height: '16rem',
          maxWidth: '250px',
          marginBottom: '2px',
        }}
        onClick={handleShow}
      >
        <Card.Img
          variant='top'
          src={image}
          style={{
            objectFit: 'contain',
            borderRadius: '5%',
            height: '10rem',
            marginBottom: '2px',
          }}
        />
        <Card.Title as='strong' className='cardTitle'>
          {title}
        </Card.Title>
        <div ref={previewRef} className={`${styles.preview} p-3`}>
          <Card.Text>{description}</Card.Text>
        </div>
      </Card>

      <Modal show={show} size='xl' onHide={handleClose}>
        <Modal.Header closeButton>
          <h4>{title}</h4>
        </Modal.Header>
        <Modal.Body>{modalComponent}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProjectCard
