import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './CreateTodoButton.css';
import { Modal } from './Modal/Modal';

function CreateTodoButton() {
    const [isOpen, setIsOpen] = React.useState(false);
    const onClickButton = () => {
        setIsOpen(!isOpen);
        
    };

    return (
        <>
            <button 
                className="CreateTodoButton"
                onClick={onClickButton}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>
            <Modal isOpen={isOpen} onClose={()=> setIsOpen(false)}>
                <form>
                    <h2>Añadir Nuevo ToDO</h2>
                    <input type="text" placeholder="Escribe"/>
                </form>
                
            </Modal>
        </>
    );
}

export { CreateTodoButton };