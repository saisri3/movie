import React from "react";
import "./FilmDetails.css";

export function FilmDetails(props) {
  return (
    <div className="wrapper">
      <img
        className="images"
        src={process.env.PUBLIC_URL + "/images/" + props.film.image}
        height="100"
        width="180"
      />
      <p className="title">{props.film.title}</p>
      <p className="year">{props.film.year}</p>
      <p className="rating">{props.film.rating}</p>
      <p className="duration">{props.film.duration}</p>
    </div>
  );
}
