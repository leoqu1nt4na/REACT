import React from 'react'
import{Link as LinkRouter} from 'react-router-dom'
import Logotexto from '../Images/Logotexto.jpeg'
import{Link} from 'react-router-dom'
import '../Card.css'

function Footer () {

    return(
        <div>
            <footer id='footer' className='text-white py-4 bg-dark'>
                <div className='container'>
                    <nav className='row'>
                        <LinkRouter to='/' className='col-12 col-md-3 d-flex align-item-center justify-content-center'>
                            <img src={Logotexto} className='mx-2' height='80'/>
                        </LinkRouter>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold m-2'>Mytinerary</li>
                            <li className='text-left'>Existen cientos de sitios de viajes con distintos precios y promociones en todo el mundo. Mytinerary te permite encontrar el mejor precio para tu viaje entre todas las opciones disponibles.</li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold m-2'>Soporte</li>
                            <li>
                                <Link to='/mytinerary' className='text-reset'>Preguntas frecuentes</Link>
                            </li>
                            <li>
                                <Link to='/item'className='text-reset' >Politica de privacidad</Link>
                            </li>
                            <li>
                               <Link to='/item'className='text-reset' >Términos y condiciones</Link>
                            </li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold m-2'>Seguinos</li>
                            <li className='d-flex justify-content-between'>
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-twitter"></i>
                            <i className="bi bi-whatsapp"></i>
                            </li>
                        </ul>

                        <div className='container'>
                            <p className='text-center'>Copyright © 2022 Mytinerary.
                            <p>Todos los derechos reservados.</p>
    </p>

                        </div>
                    </nav>
                </div>
            </footer>
        </div> 
    )
}

export default Footer;

//agregar la imagen aca

//pegar el codigo de letra en el index css

//importar footer a app.js

//colocar <footer/> al fnal de app antes del div

//poner la foto de mytenerary en el footer

//copiar el cdn para icons arriba del link en el html

//el video lo pegamos abajo de carrousel