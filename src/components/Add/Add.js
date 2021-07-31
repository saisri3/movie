import {useState} from "react"
import Add_Form from "./Add_Form"
import Popup from "./Popup"

export function Add({add_new_movie}) {

      const [show_form, set_show_form] = useState(0)
      const [isOpen, setIsOpen] = useState(false);//for popup of add
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 

      const handleClick = () => {
            set_show_form(1)
      }

      const add_movie = (data) => {
            add_new_movie(data)
            set_show_form(0)
      }

    return (
      <div className="add">
            <button onClick={handleClick}>ADD NEW MOVIE</button>
                {show_form ? <Add_Form add_movie={add_movie} /> : null}
                
            
      </div>

)
}