import React from 'react';
import "./FilmDetails.css";


export function FilmDetails(props) {
        return (
        <div className="wrapper">
            <img key={props.film.image} className="images" src={process.env.PUBLIC_URL + '/images/'+props.film.image} height="100" width="180"/>
            <p key={props.film.title} className="title">{props.film.title}</p>
            <p key={props.film.year} className="year">{ props.film.year}</p>
            <p key={props.film.rating} className="rating">{props.film.rating }</p>
            <p key={props.film.duration} className="duration">{ props.film.duration}</p>
          </div>
  
    )
}
