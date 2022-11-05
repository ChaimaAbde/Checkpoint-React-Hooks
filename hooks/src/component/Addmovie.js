import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Addmovie({ film, setFilm }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newmovie, setnewmovie] = useState({
    name: "",
    image: "",
    description: "",
    url: "",
    rating: 0,
  });
  const handleAdd = () => {
    setFilm([...film, newmovie]);
  };
  return (
    <div>
      <Button
        className="click"
        variant="primary"
        onClick={handleShow}
        style={{
          margin: "67px 500px 0px 684px",
          height: "60px",
          backgroundColor: "yellow",
          color: "black",
          border: "2px solid black",
          fontSize: "26px",
        }}
      >
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, name: e.target.value })
                }
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>URL Image</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, image: e.target.value })
                }
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, description: e.target.value })
                }
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>URL</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, url: e.target.value })
                }
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, rating: e.target.value })
                }
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            style={{ backgroundColor: "yellow" }}
            onClick={() => handleAdd()}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Addmovie;
