import React, { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './CSS/App.css';
import { text } from '@fortawesome/fontawesome-svg-core';


const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar el curso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Llorar a la lloraria', completed: false},
  {text:'usar estados derivados', completed: true}
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
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


  return (
    <>
      
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
          /> 
        ))}
      </TodoList>
      
      
    <CreateTodoButton/>
      
    </>
  );
}


export default App;
