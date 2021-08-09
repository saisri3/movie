import { useState } from "react";
import "./Add_Form.css";
import { Form, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Popup from "./Popup";

export default function AddForm({ addNewMovie }) {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    year: "",
    rating: "",
    duration: "",
  });

  const { image, title, duration, year, rating } = formData;
  const [isOpen, setIsOpen] = useState(false); //for popup of add

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    addNewMovie(formData);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <input type="button" value="Add New Movie" onClick={togglePopup} />
      {/* {showForm ? <AddForm addNewMovie={addNewMovie} /> : null} */}

      {isOpen && (
        <Popup
          content={
            <>
              <Form>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label classname="iamge">Select an Image</Form.Label>
                  <Form.Control type="file" onChange={(e) => handleChange(e)} />
                </Form.Group>
              </Form>

              <Form.Group as={Row} className="mb-3" controlId="formtitle">
                <Form.Label column sm={2}>
                  Title
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    name={"title"}
                    value={title}
                    onChange={(e) => handleChange(e)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formyear">
                <Form.Label column sm={2}>
                  Year
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Year"
                    name={"year"}
                    value={year}
                    onChange={(e) => handleChange(e)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formrating">
                <Form.Label column sm={2}>
                  Rating
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Rating"
                    name={"rating"}
                    value={rating}
                    onChange={(e) => handleChange(e)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="duration">
                <Form.Label column sm={2}>
                  Duration
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Duration eg:'1h20min','3h'"
                    name={"duration"}
                    value={duration}
                    onChange={(e) => handleChange(e)}
                  />
                </Col>
              </Form.Group>

              <Button onClick={handleSubmit}> Add Movie</Button>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}
