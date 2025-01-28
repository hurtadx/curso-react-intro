import { counter } from '@fortawesome/fontawesome-svg-core';
import './CSS/TodoCounter.css';


function TodoCounter ({counter,total, completed}) {
    return (
     <h1>
      {counter}
     </h1>
    );
  }

  
  export {TodoCounter};