
import React from "react";
import './Header.css'
import { useState } from 'react';
import Data from '../MOCK_DATA.json'





 
 
const Header = () => {    

    return (
      <div className="header">
        <p className="image_header">IMAGE</p>
        <p>TITLE</p>
        <p>YEAR</p>
        <p>RATING</p>
        <div >
          <p>DURATION</p>
       
          
         
        </div>
       
             
      </div>
      
    );
  };
export default Header;

