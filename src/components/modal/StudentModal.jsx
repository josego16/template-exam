import React from 'react';
import '../../css/Modal.css';

const StudentModal = ({children, onClose}) => {
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(event) => event.stopPropagation()}>
                {children}
                <button className="close-btn" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default StudentModal;