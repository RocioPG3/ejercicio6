
// import './App.css';
import {useEffect, useState} from "react";
import TodoList from '../components/TodoList';
import NewTodo from '../components/NewTodo';
import useFetch from '../hooks/useFetch';
//Aquí importaríamos el uso de ese Hook personalizado que hemos creado
// import {useFetch} from "./hooks/useFetch";

function Ejercicio4() {


  return (
    <div className="App">
      <h2>Todo-List</h2>
      <NewTodo />
      <TodoList/>
      
      
    </div>
  );
}

export default Ejercicio4;