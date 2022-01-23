import React from 'react'
import Carousel from './components/Carousel'
import Cards from './components/Cards';
import './Home.css'


const Home =() => {
    return(

        <div>
           
        <Carousel/> 
        <h1 >MyTinerary</h1> 
        <p className="titulo1">This travel agency with more than 14 years of experience in the market, characterized by good service and offering quality tourist products in national and international destinations, working with a team of more than 60 people committed to fulfilling the dreams of journey of our clients. We coordinate all the services of a tourist package, such as air tickets, accommodation, food, transfers, tours, medical assistance, car rental, cruises. among others. We also manage all corporate travel services, conventions, incentive trips and events.</p>
        <h1>Top destinos más buscados hoy en Argentina</h1>
        <Cards/>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/bu-XsOIzbsA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                       
        </div>
            
        
        
    )
}

export default Home;