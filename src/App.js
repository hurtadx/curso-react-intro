import React, { useEffect, useState} from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './CSS/App.css';



const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar el curso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Llorar a la lloraria', completed: false},
  {text:'usar estados derivados', completed: false},
  {text:'archivar', completed:false}
]

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState(''); 

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
   (todo) => {
     const todoText = todo.text.toLowerCase();
     const searchText = searchValue.toLowerCase
     ();
     return todoText.includes(searchText);
    }
  ); 


  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1
    );
     setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  //estas trabajando aca tontolon

  const [Counter, setCounter] = React.useState('')

   const updateCounter = (newTitle) => {
    setCounter(newTitle)
   };

   useEffect(() => {
    if (completedTodos === totalTodos && totalTodos > 0) {
      updateCounter(`¡Has Hecho <span>ToDos</span>!`);
    
    }else if(completedTodos === 0 && totalTodos === 0){
      updateCounter('¡Crea Nuevos <span>Todo´s<span>!')
    }else {
      updateCounter(`Has Completado <span>${completedTodos}</span> De <span>${totalTodos}</span> TODOs`);
    }
    }, [completedTodos, totalTodos]);
    
  
      
   

  return (
    <>
      
      <h1 dangerouslySetInnerHTML={{ __html: Counter }} />

      <TodoCounter 
       
      completed={completedTodos} 
      total={totalTodos}/>

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text= {todo.text} 
            completed= {todo.completed}
            onComplete={() => completeTodo(todo.text)} 
            onDelete={() => deleteTodo(todo.text)}
          /> 
        ))}
      </TodoList>
    
      
    <CreateTodoButton/>
      
    </>
  );
}


export default App;
