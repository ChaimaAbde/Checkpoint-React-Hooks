import React from "react";
import ReactStars from "react-rating-stars-component";
import Card from "react-bootstrap/Card";

function Carrd({ el }) {
  return (
    <div>
      <Card
        className="click"
        style={{
          width: "18rem",
          margin: "20px",
          boxShadow: "1px 2px 9px #F4AAB9",
        }}
      >
        <Card.Img variant="top" src={el.image} />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>{el.description}</Card.Text>
          <a
            style={{
              color: "yellow",
              textDecoration: "none",
              textAlign: "center",
              marginLeft: "90px",
            }}
            href={el.url}
          >
            Watch it
          </a>

          <ReactStars
            style={{ marginLeft: "50px" }}
            count={5}
            size={24}
            value={el.rating}
            activeColor="yellow"
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Carrd;
