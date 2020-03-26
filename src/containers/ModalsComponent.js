
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';

const ModalsComponent = ({showModal, title, body, aceptAction}) =>{
  const [show, setShow] = useState(showModal);
  const handleClose = () => setShow(false);
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title> { title } </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {body}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={()=>{aceptAction}}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalsComponent;