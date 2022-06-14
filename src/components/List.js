import React from 'react'


export default function List(props) {
  return (
    <div className='container'>
     <h1>{props.category}</h1>
     <ul className='list-group'>
         {
             props.products.map((shop) =>{
                 return <li key={shop.id} className="list-group-item">Referencia: {shop.id} Artículo: {shop.products} Nombre: {shop.brand} {shop.model ? shop.model:""} Precio: {shop.price} Euros</li>
             })
         }
         
     </ul>
    </div>
  );
}
