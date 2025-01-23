import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li>
            <span className={'icon icon-check icon-check--active'}>
                <FontAwesomeIcon icon={faCheck} />
            </span>
            <p>{props.text}</p>
            <span className="icon icon-delete">
                <FontAwesomeIcon icon={faXmark} />
            </span>
        </li>
    );
}

export { TodoItem }