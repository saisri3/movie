import { useState } from "react";
import "./Add_Form.css";
import { Form } from "react-bootstrap";
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
                <div>
                  <label id="label">upload image</label>
                  <input
                    name={"image"}
                    value={image}
                    onChange={(e) => handleChange(e)}
                    type="text"
                  />
                </div>
                <div>
                  <label id="label">enter title</label>
                  <input
                    name={"title"}
                    value={title}
                    onChange={(e) => handleChange(e)}
                    type="text"
                  />
                </div>
                <div>
                  <label id="label">enter year</label>
                  <input
                    name={"year"}
                    value={year}
                    onChange={(e) => handleChange(e)}
                    type="text"
                  />
                </div>
                <div>
                  <label id="label">enter rating</label>
                  <input
                    name={"rating"}
                    value={rating}
                    onChange={(e) => handleChange(e)}
                    type="text"
                  />
                </div>
                <div>
                  <label id="label">enter duration</label>
                  <input
                    name={"duration"}
                    value={duration}
                    onChange={(e) => handleChange(e)}
                    type="text"
                  />
                </div>
              </Form>

              <button onClick={handleSubmit}> Add Movie</button>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}
