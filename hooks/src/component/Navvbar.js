import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

function Navvbar({ setText, setrate }) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand
            href="#"
            style={{
              fontSize: "30px",
              marginLeft: "160px",
              fontFamily: "fantasy",
              color: "yellow",
            }}
          >
            Movie-Search
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex" style={{ marginRight: "190px" }}>
              <input
                type="Text"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(el) => setText(el.target.value)}
              />
              render(
              <ReactStars
                count={5}
                onChange={(newRating) => setrate(newRating)}
                size={15}
                activeColor="#ffd700"
              />
              <Button
                variant="outline-success"
                style={{ border: "solid 3px yellow", color: "white" }}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navvbar;
