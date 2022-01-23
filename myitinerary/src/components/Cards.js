import React from 'react'
import Card from './Card'

import image1 from '../Images/Miami.jpeg'
import image2 from '../Images/Madrid.jpg'
import image3 from '../Images/NY.jpg'
import image4 from '../Images/Rio.jpg'

const cards = [
  {
    id:1,
    title:'Miami',
    image: image1,
    price: '$ 95.000',
    url: 'https://www.google.com'

  },
  {
    id:2,
    title:'Madrid',
    image: image2,
    price: '$ 115.000',
    url: 'https://www.google.com'

  },
  {
    id:3,
    title:'New York',
    image: image3,
    price: '$ 105.000',
    url: 'https://www.google.com'
  },
  {
    id:4,
    title:'Rio de Janeiro',
    image: image4,
    price: '$ 45.000',
    url: 'https://www.google.com'

  },
]


function Cards() { 
  
  return (
  <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
         {
           cards.map(card=> (
             <div className="col-md-3" key={card.id}>
               <Card title={card.title}  image={card.image} price={card.price} url={card.url}/>
               </div>
               ))
         }
      </div>     
  </div>
  )   
}

export default Cards