import { useState } from "react"
import "./Add_Form.css"
import { Form } from 'react-bootstrap';
import { Button } from "react-bootstrap";
import Popup from "./Popup";


export default function Add_Form({add_movie }) {
        const [form_data, set_form_data] = useState({
            title : "",
            duration: "",
            year: "",
            rating: "",
            image:''
        })

    const { image,title, duration, year, rating } = form_data
    const [show_form, set_show_form] = useState(0)
    const [isOpen, setIsOpen] = useState(false);//for popup of add
    
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }



        const handleChange = (e) => {
            set_form_data({...form_data , [e.target.name] : e.target.value})
        }

        const handleSubmit = () => {
            add_movie(form_data)
        }

    return (
        <div>
            
            <input
      type="button"
      value="Add New Movie"
      onClick={togglePopup}
    />
   
    {isOpen && <Popup
                content={<>
                    <Form>
                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group> */}
                   
                <div>
                    <label id="label">enter title</label>
                    <input name={"title"} value={title} onChange={(e) => handleChange(e)} type="text" />
                    
               </div>
               <div>
                    <label id="label">enter duration</label> 
                    <input name={"duration"} value={duration} onChange={(e) => handleChange(e)} type="text" />
                       
               </div>
               <div>
                    <label id="label">enter year</label> 
                    <input name={"year"} value={year} onChange={(e) => handleChange(e)} type="text" />
                       
               </div>
               <div>
                    <label id="label">enter rating</label> 
                    <input name={"rating"} value={rating} onChange={(e) => handleChange(e)} type="text" />
                       
               </div>
               <div>
                    <label id="label">upload image</label> 
                    <input name={"image"} value={image} onChange={(e) => handleChange(e)} type="text" />
               </div>
           
            
           
            
                
               
            







                    </Form>
                    

       <button onClick={handleSubmit}> Add Movie</button>
      </>}
      handleClose={togglePopup}
    />}    
            
            
        </div>
    )
}
