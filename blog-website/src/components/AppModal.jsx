import React from "react";
import { Modal } from "react-bootstrap";
import { FiX } from "react-icons/fi";
import "./AppModal.css"; 

function AppModal({ show, onHide, title, children, footer }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      contentClassName="custom-bootstrap-modal"
    >
      <Modal.Header>
        <Modal.Title style={{ color: "#333" }}>{title}</Modal.Title>
        <button className="modal-custom-close" onClick={onHide}>
          <FiX />
        </button>
      </Modal.Header>

      <Modal.Body>   
        {children}
      </Modal.Body>

      {footer && (
        <Modal.Footer style={{ borderTop: "1px solid #3d3d3d", gap: "10px" }}>
          {footer}
        </Modal.Footer>
      )}
    </Modal>
  );
}

export default AppModal;