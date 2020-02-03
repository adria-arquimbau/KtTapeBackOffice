/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Toast, Row, Col } from 'react-bootstrap'

function Modal({message}) {

  const [show, setShow] = useState(true)
    
  return  (
    <Row clasName="modal">
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">KtTape BackOffice</strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default Modal