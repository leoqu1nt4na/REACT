import React from 'react'
import {Link as LinkRouter} from 'react-router-dom';
import '../Card.css'

function Card1({title,pais,image,text,url}) {  
    return (
      <div className='tarjetas'>
        <div href={url}  className="card bg-dark  text-center" >
    <img src={image} className="card-img" alt="..."/>
    <div className="card-body text-light">
      <h5 className="card-title">{title}</h5>
      <p className="card-text text-primary">{pais}</p>
      <LinkRouter  to='/' className="btn btn-outline-light"> leer mas...</LinkRouter>  

    
      
     </div>
  </div>
  </div>
    )
     
  }

export default Card1