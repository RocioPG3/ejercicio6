import {useState, useContext} from "react";
import { GlobalContext } from "../Router";

import "./TodoList.css";
export default function TodoList() {

  const { todos, setTodos } = useContext(GlobalContext);

  //Apartado 7
  const removeTodo =title=>{
    setTodos(todos.filter(todo=> todo.title !== title));
  }
  const toggleCompleted = (e, index) => {
    if (e.target.tagName !== "BUTTON") {
    const newTodo = [...todos];
    newTodo[index].completed = !newTodo[index].completed; //Nuestro array newTodo accede al elemento que quiere (index) y accede a su propiedad "completed" y la negamos(la invertimos, hacemos toggle)
    setTodos(newTodo);
  }
  };

  return (
    <ul class="list-group">
      {todos.map((item, index) => {
        
        return (
          <li className={`d-flex justify-content-between list-group-item ${item.completed && "completed"}`}
            onClick={e => toggleCompleted(e, index)}>
            <span>ToDo:{index}: {item.title}</span>
            <button className="btn btn-danger" onClick={()=> removeTodo(item.title)}>X</button>
          </li>
        )
      })}
    </ul>
  )
}
