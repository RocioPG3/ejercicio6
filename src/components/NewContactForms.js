
import {useState, useContext} from "react";

import { GlobalContext } from '../Router';


export default function NewContactForms() { /* Volvemos a desestructura y no hace falta poner "props" */

const {setContacts}= useContext(GlobalContext);

  

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");


/* Funciones del formulario para actualiza el estado */ 

  function handleName(e) {
    setName(e.target.value);
  };
  function handleLastName(e) {
    setLastName(e.target.value);
  };
  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  };
  function handleAddress(e) {
    setAddress(e.target.value);
  };
  function handlePostalCode(e) {
    setPostalCode(e.target.value);
  };
  function handleCity(e) {
    setCity(e.target.value);
  };


  /* Apartado 8 */
  function submit(e) { /* Esta función cogerá todos los estados y nos creará un objeto con todos ellos */
    e.preventDefault(); /*Utilidad para que no se actualice la página */
  
    
    
    /* V1 */
    // const newContact={
    //     name: name,
    //     lastName: lastName,
    //     address:address,
    //     phoneNumber:phoneNumber,
    //     postalCode:postalCode,
    //     city:city,

    //   };

    /* V2, versión más corta */

    //Podemos crear una propiedad de un obj directamente en una variable
    //Asignará el nombre de la variable y su valor a una nueva propiedad
    const newContact = {name, lastName, address, postalCode, phoneNumber, city};
    
    // setContacts([...contacts, newContact]) /* Necesitaría recibir "contacts" */
    setContacts(currentContacts => [...currentContacts, newContact]); //Sesión 52, 2:30 . Función que envía el estado actual de los contactos(currentContacts) y espera que le devuelva el nuevo valor
    
    // e.target.reset();
    setName("");
    setLastName("");
    setAddress("");
    setPhoneNumber("");
    setPostalCode("");
    setCity("");

      
  }
  
  return (
    <form className="form-group" onSubmit={submit}>
      <input className="form-control mb-3" type="text" value={name} onChange={handleName} placeholder="Introduce el nombre"/>
      <input className="form-control mb-3" type="text" value={lastName} onChange={handleLastName} placeholder="Introduce los apellidos"/>
      <input className="form-control mb-3" type="text" value={phoneNumber}onChange={handlePhoneNumber} placeholder="Introduce el nº de teléfono"/>
      <input className="form-control mb-3" type="text" value={address} onChange={handleAddress} placeholder="Introduce la dirección"/>
      <input className="form-control mb-3" type="text" value={postalCode} onChange={handlePostalCode} placeholder="Introduce el código postal"/>
      <input className="form-control mb-3" type="text" value={city} onChange={handleCity} placeholder="Introduce la ciudad"/>
      <input type="submit" className="btn btn-success" value="Registrar"/>
    </form>
  )
}




//-------- Versión avanzada alternativa-------//

// const initialState = {
//   name: "",
//   lasName: "",
//   address: "",
//   phoneNumber:"",
//   city: "",
//   postalCode: "",

// }

// const [form, setForm] = useState(initialState)

// function handleInput (e) {
//   const inputName = e.target.id;
//   const newValue = e.target.value;
//   setForm({ ...form, ...{[inputName]: newValue}})


//   return (
//     <form className="form-group" onSubmit={submit}>
//       <input  id="name" value={form.name} onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce el nombre"/>
//       <input  id="lastName" value={form.lastName} onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce los apellidos"/>
//       <input  id="phoneNumber" value={form.phoneNumber}onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce el nº de teléfono"/>
//       <input  id="address" value={form.address} onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce la dirección"/>
//       <input  id="postalCode" value={form.postalCode} onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce el código postal"/>
//       <input  id="city" value={form.city} onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce la ciudad"/>
//       <input type="submit" className="btn btn-success" value="Registrar"/>
//     </form>
//   )
// }