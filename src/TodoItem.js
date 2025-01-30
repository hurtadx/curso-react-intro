import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import './CSS/TodoItem.css';

function TodoItem(props) {
    return (
        <li className={`li todoitem ${props.completed && "TodoItem--complete"}`}>
            <span 
            className={`icon icon-check ${
            props.completed && "icon-check--active"}`}
            onClick={props.onComplete}>
                <FontAwesomeIcon icon={faCheck} />
            </span>
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
            <span className="icon icon-delete"
            onClick={props.onDelete}>
                <FontAwesomeIcon icon={faXmark} />
            </span>
        </li>
    );
}

export { TodoItem }