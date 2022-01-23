import React from "react";
import {Link} from "react-router-dom"
import bariloche from "../Images/bariloche.jpg"
import Barcelona from "../Images/Barcelona.jpg"
import cataratas from "../Images/cataratas.jpg"
import Miami2 from "../Images/Miami2.jpg";

function Carousel() {
  return ( 
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h1 className="nombre">Bariloche</h1>
            <Link to="/">
              <img src={bariloche} className="d-block w-100" alt="" id="0"/>
            </Link>
          </div>
          <div className="carousel-item">
          <h1 className="nombre">Barcelona</h1>
            <Link to="/">
              <img src={Barcelona} className="d-block w-100" alt="" id="1"/>
            </Link>
          </div>
          <div className="carousel-item">
          <h1 className="nombre">Cataratas del Iguazú</h1>
            <Link to="/">
              <img src={cataratas} className="d-block w-100" alt=""id="2" />
          </Link>
          </div>
          <div className="carousel-item">
          <h1 className="nombre">Miami</h1>
            <Link to="/">
              <img src={Miami2}  className="d-block w-100" alt=""id="3" />
            </Link>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
