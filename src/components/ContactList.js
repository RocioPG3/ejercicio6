import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../Router';

export default function ContactList() {  /* Desestructuración del objeto {} dentro del paréntesis. En vez de poner "props", ponemos contacts.Antes de hacer map tmb lo tenemos que poner(en lugar de "props.contacts") */
 
const {contacts, setContacts} = useContext(GlobalContext);


const removeContact = phoneNumber =>{
  return e => {
    setContacts(contacts.filter(contact => contact.phoneNumber !== phoneNumber));
  }
}


return (
    <div className='row'>
        {contacts.map((contact, index) => { /* Devolvemos un ul para cada contacto (total los 3 objetos creados en App) */
            return (
              <ul className="list-group mb-3 col-12 col-sm-6 col-xl-3" key={contact.phoneNumber}> {/* Medidas en Bootstrap para que sea responsive */}
                <li className="list-group-item active">Contacto {index +1}</li>
              <li className="list-group-item">{contact.name}</li>
              <li className="list-group-item">{contact.lastName}</li>
              <li className="list-group-item">{contact.phoneNumber}</li>
              <li className="list-group-item">{contact.address}, {contact.postalCode},{contact.city}</li>
              <li className='list-group-item'><button type="button" className='btn btn-warning' onClick={removeContact(contact.phoneNumber)}>Eliminar</button></li>
              
            
            </ul>
            );
        })}
    </div>
  )
}
