import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './TodoSearch.css';

function TodoSearch() {
    return (
        <div className="search-container">
            <input placeholder=" Buscar..." />
            <FontAwesomeIcon 
                icon={faMagnifyingGlass} 
                className="search-icon"
            />
        </div>
    );
}


export { TodoSearch };