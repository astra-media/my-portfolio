import React, { useRef, useState } from 'react'
import { Card, Modal, Button } from 'react-bootstrap'
import PdfViewer from './PdfViewer'

const Resume = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <h4>Resume:</h4>
      <Button onClick={handleShow}>Show Resume</Button>

      <Modal show={show} size='xl' onHide={handleClose}>
        <Modal.Header closeButton>Resume</Modal.Header>
        <Modal.Body>
          <PdfViewer />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Resume
