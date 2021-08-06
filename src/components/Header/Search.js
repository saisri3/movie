import { useState, useEffect } from "react";

export default function Search(props) {
  // const SearchFunction = (event) => {

  //   searchterm=(event.target.value)
  //   return searchterm;

  // }

  // console.log(searchterm,"hii")

  return (
    <div className="search">
      <form>
        <label htmlFor="header-search">
          <span className="visually-hidden">Search For LatestMovies</span>
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Enter movie Name..."
          //  value ={searchterm}
          onChange={(e) => props.SearchFunction(e.target.value)}
        />

        <button className="go" type="submit">
          GO
        </button>
        
      </form>
    </div>
  );
}
