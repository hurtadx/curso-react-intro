import React from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './CSS/CreateTodoButton.css';
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
            ><FontAwesomeIcon icon={faPlus}
                 />
            </button>
            <Modal isOpen={isOpen} onClose={()=> setIsOpen(false)}>
                <form>
                    <h2>Añadir Nuevo ToDO</h2>
                    <input type="text" placeholder="Escribe el ToDo"/>
                </form>
                <div className='Modal-butoonContainer'>
                    
                    <button onClick={()=> setIsOpen(false)}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </button>
                    <button type='submit' className='Modal-button Modal-buttoon-add'>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
            </Modal>
        </>
    );
}

export { CreateTodoButton };