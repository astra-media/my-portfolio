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
        className={`overflow-hidden ${styles.card} p-3`}
        onClick={handleShow}
      >
        <Card.Img
          variant='top'
          src={image}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            objectFit: 'contain',
            borderRadius: '5%',
            height: '10rem',
          }}
        />
        <Card.Title>
          <h5>{title}</h5>
        </Card.Title>
        <div ref={previewRef} className={`${styles.preview} p-3`}>
          <Card.Text>{description}</Card.Text>
        </div>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>{title}</Modal.Header>
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
