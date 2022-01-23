import React from 'react'
//import {Link} from 'react-router-dom';
import '../Card.css'

function Card({title,image,price,url}) {  
  return (
  <div>
      <div className="card bg-dark text-white text-center">

      <div className="overflow">
      <img src={image} alt="" className="card-img-top"/>
      </div>
  
  <div className="card-img-overlay" >
    <h5 className="card-text" >{title}</h5>
    <h5 className="card-text" >{price}</h5>
    <h5 className="card-text" >Desde Buenos Aires</h5>
    {/*<Link to={url} className="btn btn-outline-secondary rounded-10"></Link>*/}
  </div>
</div>
  </div>
  )
   
}

export default Card