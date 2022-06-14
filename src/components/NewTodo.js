import {useState, useContext} from "react";
import { GlobalContext } from "../Router";

export default function NewTodo() {

  const {setTodos} = useContext(GlobalContext);


  
  //Apartado 6
    const [newTodo, setNewTodo]= useState("");
    
    function handleSubmit (e) {
      e.preventDefault();

      setTodos(currentTodos => [{title: newTodo, completed: false}, ...currentTodos]);
      setNewTodo("");
    }

    return (
    

       <form onSubmit={handleSubmit} className="my-4 mx-4">
           <input 
           type="text" 
           placeholder='Introduce un nuevo todo -list' 
           className="form-control"
           onChange={e => setNewTodo(e.target.value)}
           value={newTodo}
           />
           </form> 
    
  )
}
