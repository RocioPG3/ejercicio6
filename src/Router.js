import { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Ejercicio1 from "./pages/Ejercicio1";
import Ejercicio2 from "./pages/Ejercicio2";
import Ejercicio3 from "./pages/Ejercicio3";
import Ejercicio4 from "./pages/Ejercicio4";
// import Error from "./pages/Error";

export const GlobalContext = createContext({});

export default function Router() {

  const initialState = [
    {name: "Federico", lastName: "Rico Loco", address: "Calle las Palomas", city:"Granada", postalCode: 27008, phoneNumber: 655897412},
    {name: "Pepín", lastName: "Flores Pérez", address: "Calle Bolivia", city:"Málaga", postalCode: 29018, phoneNumber: 656987412},
    {name: "Juana", lastName: "Flores del Campo", address: "Calle el Pedregal", city:"Málaga", postalCode:29017, phoneNumber: 789524623},
    
  ];
  
  const [contacts, setContacts] = useState(initialState); 


  const [todos, setTodos] = useState([]);

  const URL = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    fetch(URL)
    .then(response => response.json())
    .then(data => setTodos(data.slice(0, 20))); //slice (0,20() para que corte en los 20 primeros. Splice lo que hace es eliminar los 20 primeros y mostrar los 20 siguientes.
  }, []);


  return (
    <div>
      <BrowserRouter>
        <nav className="navbar px-5 py-3 bg-dark">
          <NavLink
            to="/ejercicio1"
            className="text-decoration-none text-ligth font-weight-bold"
            activeClassName="active"
          >
            Ejercicio1
          </NavLink>
          <NavLink
            to="/ejercicio2"
            className="text-decoration-none text-ligth font-weight-bold"
            activeClassName="active"
          >
            Ejercicio2
          </NavLink>
          <NavLink
            to="/ejercicio3"
            className="text-decoration-none text-ligth font-weight-bold"
            activeClassName="active"
          >
            Ejercicio3
          </NavLink>
          <NavLink
            to="/ejercicio4"
            className="text-decoration-none text-ligth font-weight-bold"
            activeClassName="active"
          >
            Ejercicio4
          </NavLink>
        </nav>

        <GlobalContext.Provider value={{contacts, setContacts, todos, setTodos}}> {/*  Cualquier punto en el árbol hacia abajo tiene disponible los contactos y la función para cambiar essos contactos*/}
          <Routes>
            <Route path="/ejercicio1" element={<Ejercicio1 />} />
            <Route path="/ejercicio2" element={<Ejercicio2 />} />
            <Route path="/ejercicio3" element={<Ejercicio3 />} />
            <Route path="/ejercicio4" element={<Ejercicio4 />} />
            {/* <Route component={Error} /> */}
          </Routes>
        </GlobalContext.Provider>

      </BrowserRouter>

      <h2>Footer</h2>
    </div>
  );
}
