import React from 'react'
import Card1 from './Card1'

import image1 from '../Images/Miami.jpeg'
import image2 from '../Images/Madrid.jpg'
import image3 from '../Images/NY.jpg'
import image4 from '../Images/Rio.jpg'
import image5 from '../Images/Barcelona.jpg'
import image6 from '../Images/bariloche.jpg'
import image7 from '../Images/cartagena.jpg'
import image8 from '../Images/cataratas.jpg'
import image9 from '../Images/cusco.jpg'
import image10 from '../Images/elchalten.jpg'
import image11 from '../Images/lima.jpg'
import image12 from '../Images/ushuaia.jpg'

const cards1 = [
  {
    id:1,
    title:'Miami',
    pais: 'Estados Unidos',
    image: image1,
    text: 'Miami es diferente al resto de ciudades estadounidenses. Su privilegiada ubicación al sur de Florida lo convierte en un destino turístico en el que se puede disfrutar de un clima cálido durante los doce meses del año.',
    url: 'https://www.google.com'

  },
  {
    id:2,
    title:'Madrid',
    pais: 'España',
    image: image2,
    text: 'La capital de cuentos de hadas de España, mejorada por la comida y los vinos españoles.Si Madrid se siente como un cuento de hadas, se debe en parte a que tantos de sus edificios parecen castillos. Incluso el Ayuntamiento es asombroso, con sus pináculos blancos y sus detalles neogóticos. Un tour arquitectónico autoguiado puede comenzar en la grandiosa estatua del oso y el madroño en la Puerta del Sol. Recorre el extravagante Palacio Real antes de absorber la belleza natural del Parque del Retiro, luego visita alguno de los muchos museos de la ciudad. También puedes encontrar arte en tu plato y en tu copa, así que te recomendamos que cierres cada día con una copa de vino riojano y unas tapas.Puntos esenciales en Madrid',
    url: 'https://www.google.com'

  },
  {
    id:3,
    title:'New York',
    pais: 'Estados Unidos',
    image: image3,
    text: 'Nueva York, un lugar donde podrás encontrar la mejor y más completa información sobre la Gran Manzana y sus zonas, sus barrios, los lugares de interés y los principales sitios turísticos para visitar y disfrutar de la gran cantidad de opciones turísticas que ofrece la ciudad de Nueva York.',
    url: 'https://www.google.com'
  },
  {
    id:4,
    title:'Rio de Janeiro',
    pais: 'Brasil',
    image: image4,
    text: 'Con sus playas abundantes, sus dramáticas montañas y el ritmo de la samba y el bossa nova como telón de fondo, es fácil enamorarse de Río de Janeiro. Famosa gracias a la canción, la playa de Ipanema sigue siendo el lugar ideal para pasear, tomar sol y ser visto. Como la mayor estatua art decó del mundo, el Cristo Redentor atrae a los visitantes a la montaña del Corcovado. Y, si vienes por el Carnaval, las celebraciones anuales de Río son extravagancias bacanales de banquetes, música, baile, disfraces y jolgorio.',
    url: 'https://www.google.com'

  },
  {
    id:5,
    title:'Barcelona',
    pais: 'Estados Unidos',
    image: image5,
    text: 'Estés donde estés de Barcelona, siempre hay algo que ver: joyas del Modernismo y de la arquitectura contemporánea, mercados que alimentan los sentidos, tesoros romanos y medievales...',
    url: 'https://www.google.com'

  },
  {
    id:6,
    title:'Bariloche',
    pais: 'Argentina',
    image: image6,
    text: 'Bariloche es una ciudad ubicada entre bosques milenarios, montañas cubiertas de nieve y lagos cristalinos, en la provincia de Río Negro, Argentina. Se trata de una postal de nuestra Patagonia. Una ciudad anfitriona por excelencia, enmarcada por algunas de las bellezas naturales más importantes del país.',
    url: 'https://www.google.com'

  },
  {
    id:7,
    title:'Cartagena',
    pais: 'Colombia',
    image: image7,
    text: 'Cartagena, un precioso pueblo pesquero en la costa caribeña de Colombia, cuenta con excelentes playas, un casco histórico antiguo (que se puede recorrer enteramente a pie) y una hermosa arquitectura colonial. Además, es uno de los lugares más seguros del país, y por eso no es extraño que Cartagena sea un enclave popular para muchos cruceros. ¿Estás cansado de explorar las calles de adoquines? Relajate y tomá un descanso en alguno de los cafés al aire libre y disfrutá de sus excelentes pasteles que podrás comerte allí mientras mirás a la gente pasar.',
    url: 'https://www.google.com'
  },
  {
    id:8,
    title:'Cataratas del Iguazú',
    pais: 'Argentina',
    image: image8,
    text: 'Provincia de Misiones con sus cataratas, suelo rojizo, selva generosa: emblemas de un territorio incomparable, cuyo nombre recuerda a los pueblos jesuíticos, sin negar las raíces de la América indígena.',
    url: 'https://www.google.com'

  },
  {
    id:9,
    title:'Cusco',
    pais: 'Perú',
    image: image9,
    text: 'Machu Picchu es el acto principal de Perú, pero no es necesario recorrer el Camino Inca para visitar la Ciudad Perdida de los Incas. Este tour privado de un día completo desde Cusco incluye un espectacular viaje en tren por el Valle Sagrado, un sabroso almuerzo buffet y un recorrido privado del sitio arqueológico declarado Patrimonio de la Humanidad por la UNESCO.',
    url: 'https://www.google.com'

  },
  {
    id:10,
    title:'El Chálten',
    pais: 'Argentina',
    image: image10,
    text: 'Esta pequeña y acogedora aldea, uno de los lugares preferidos de la Patagonia para los viajeros, está situada en un bonito valle fluvial. La oportunidad de practicar senderismo y acampar en medio de algunos de los paisajes de montaña más impresionantes atrae a los amantes de la naturaleza de todo el mundo. Aunque suele permanecer cerrado durante los meses de invierno en el hemisferio sur, de abril a octubre, no olvides llevar prendas adecuadas para el frío, la lluvia y el viento, por si acaso. Eso sí, si el sol brilla, El Chaltén es un auténtico paraíso terrenal.',
    url: 'https://www.google.com'

  },
  {
    id:11,
    title:'Lima',
    pais: 'Perú',
    image: image11,
    text: 'Descubra los serenos paisajes de la campiña peruana en una excursión de día completo desde Lima. Vea pingüinos de Humboldt y leones marinos en las islas Ballestas, visite una bodega local y deslícese por las dunas de Huacachina durante el transcurso de un día. Si el tiempo lo permite, también puede hacer una parada en Chincha Alta para disfrutar de más experiencias en el campo. Esta excursión para grupos pequeños es una forma estupenda de disfrutar de la cultura local y la hermosa naturaleza.',
    url: 'https://www.google.com'
  },
  {
    id:12,
    title:'Ushuaia',
    pais: 'Argentina',
    image: image12,
    text: 'La ciudad más al sur del mundo se encuentra en el Canal Beagle, entre la cadena montañosa Martial y el fin del mundo. Es un punto de acceso clave para el esquí en el Cerro Castor y Glaciar Martial, las aventuras en la vida salvaje con pingüinos y orcas en el Canal Beagle, y el Parque Nacional Tierra del Fuego.',
    url: 'https://www.google.com'

  }
]


function Cards1() { 
  
  return (
  <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
         {
           cards1.map(card1=> (
             <div className="col-md-4" key={card1.id}>
               <Card1 title={card1.title} pais={card1.pais} image={card1.image} text={card1.text} url={card1.url}/>
               </div>
               ))
         }
      </div>     
  </div>
  )   
}

export default Cards1