import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './CSS/App.css';


const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Llorar a la lloraria', completed: false}
]

function App() {
  return (
    <>
      
      <TodoCounter completed={1} total={4}/>
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
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
