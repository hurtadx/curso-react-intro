import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './CSS/TodoSearch.css';

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('');



    return (
        <div className="search-container">
            <input placeholder=" Buscar..." className='TodoSearch' onChange={(event)=>{
                
                
            }}/>
            <FontAwesomeIcon 
                icon={faMagnifyingGlass} 
                className="search-icon"
            />
        </div>
    );
}


export { TodoSearch };