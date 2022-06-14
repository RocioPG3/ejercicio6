import React from 'react'

export default function Card(props) {
  return (
    <>
    <div className="card w-50 m-auto">
  <img src= {props.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.paragraph}</p>
    <a href= {props.link} className="btn btn-primary">{props.textButton}</a>
  </div>
</div>


    </>
  )
}
