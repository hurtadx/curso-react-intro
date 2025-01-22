import React from 'react';
import ReactDOM from 'react-dom'; 
import './Modal.css';

function Modal({ children, isOpen, onClose }) {
    return ReactDOM.createPortal(
        
        isOpen && (
            <>
               
                <div className="ModalBackground" onClick={onClose} />
                
                <div className="ModalContainer">
                    {children}
                </div>
            </>
        ),
        
        document.getElementById('modal')
    );
}

export { Modal };