import React from "react";
import Carrd from "../component/Carrd";

function Movieslist({ film, rate, text }) {
  return (
    <div className="bigBox">
      <div className="box">
        {film
          .filter(
            (el) =>
              el.name.toLowerCase().includes(text.toLowerCase()) &&
              el.rating >= rate
          )
          .map((el) => (
            <Carrd el={el} />
          ))}
      </div>
    </div>
  );
}

export default Movieslist;
