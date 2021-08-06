import { useState } from "react";
import Add_Form from "./AddForm";


export function Add({ addNewMovie }) {
  const [showForm, setShowForm] = useState(1);
  const [isOpen, setIsOpen] = useState(false); //for popup of add

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setShowForm(1);
  };

  const addMovie = (data) => {
    addNewMovie(data);
    setShowForm(0);
  };

  return (
    <div className="add">
      <button onClick={handleClick}>ADD NEW MOVIE</button>
      {showForm ? <Add_Form addMovie={addMovie} /> : null}
    </div>
);
    
}
