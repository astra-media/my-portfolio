import React, { useRef, useState } from 'react'
import { Card, Modal, Button } from 'react-bootstrap'
import PdfViewer from './PdfViewer'

const Resume = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div className='d-flex flex-column justify-content-center'>
      <div>
        <div className='mb-2'>
          <Button
            className='button-style'
            onClick={handleShow}
            style={{ marginRight: '10px' }}
          >
            View Resume
          </Button>
          <a
            href='/Resume_Sakeeb.pdf'
            target='_blank'
            download
            style={{ textDecoration: 'none' }}
          >
            <Button className='button-style'>Download Resume</Button>
          </a>
        </div>

        <Modal show={show} size='xl' onHide={handleClose}>
          <Modal.Header closeButton>
            <h3 style={{ fontWeight: 'bolder' }}>Resume</h3>
          </Modal.Header>
          <Modal.Body>
            <PdfViewer fileName='/Resume_Sakeeb.pdf' />
          </Modal.Body>
          <Modal.Footer>
            <Button className='button-style' onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default Resume
