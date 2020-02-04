import React, { useContext, useEffect, useState } from 'react'
import { withRouter, Route } from 'react-router-dom'

import { Toast, Row, Col, Button, Modal } from 'react-bootstrap'


function InfoCenterModal(props) {


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <h4>Beta Version</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <p>
            {props.message}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default withRouter(InfoCenterModal)