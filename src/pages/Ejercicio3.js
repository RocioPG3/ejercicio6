
// import './App.css';
import ContactList from '../components/ContactList';
import NewContactForms from '../components/NewContactForms';

function Ejercicio3() {
  


  return (
    <div className="container"> {/* Ponemos la clase container para que genere los márgenes y se adapte bien a todas las medidas */}
      <h2 className="my-4">Agenda</h2>
      <ContactList /> 
      <h2 className='my-4'>Nuevo contacto</h2>
      <NewContactForms /> {/* Con esta función modificamos el formulario manipulando el array inicial "contacts" */}
      
    </div>
  );
}

export default Ejercicio3;