import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './CSS/TodoSearch.css';

function TodoSearch({searchValue,
    setSearchValue}) {
  
    return (
        <div className="search-container">
            <input
            placeholder=" Buscar..."
            value={searchValue}
            className='TodoSearch' 
            onChange={(event)=>{setSearchValue(event.target.value)
                
                
            }}/>
            <FontAwesomeIcon 
                icon={faMagnifyingGlass} 
                className="search-icon"
            />
        </div>
    );
}


export { TodoSearch };