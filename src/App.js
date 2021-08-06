import "./App.css";
import "./components/FilmDetails/FilmDetails.css";
import data from "./components/MOCK_DATA";
import { FilmDetails } from "./components/FilmDetails/FilmDetails";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import "./components/Header/Search.css";
import AllFilms from "./components/AllFilms";
import Search from "./components/Header/Search";
import Sort from "./components/Header/Sort";
import { Add } from "./components/Add/Add";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import AddForm from "./components/Add/AddForm";

function App() {
  let [movieList, setMovieList] = useState(data);
  // let [searchterm, set_searchterm] = useState("")

  const sorter = (obj1, obj2) => {
    return obj1.duration < obj2.duration
      ? -1
      : obj1.duration > obj2.duration
      ? 1
      : 0;
  };

  const addNewMovie = (new_movie) => {
    setMovieList([...movieList, new_movie]);
  };

  const [order, setorder] = useState("");
  const SortBasedDuration = () => {
    //if order ==== '' sort it in ascending order setOrder
    //else if order ==== 'ascending' sort it in 'descending' order and change the order using setOrder.
    //else sort it in ascending order and setOrder
    if (order === "") {
      setMovieList(movieList.sort(sorter));
      setorder("ascending");
    } else if (order === "ascending") {
      setMovieList(
        movieList
          .sort((obj1, obj2) => {
            return obj1.duration < obj2.duration
              ? -1
              : obj1.duration > obj2.duration
              ? 1
              : 0;
          })
          .reverse()
      );
      setorder("descending");
    } else {
      setMovieList(movieList.sort(sorter));
      setorder("ascending");
    }
  };

  useEffect(() => {
    SortBasedDuration();
  }, [movieList]);

  const SearchFunction = (searchterm) => {
    const FilteredFilms = movieList.filter((movieList) => {
      // console.log(movieList.title)
      return movieList.title.toLowerCase().includes(searchterm.toLowerCase());
    });
    setMovieList(FilteredFilms);
  };

  // useEffect(() => {

  //   const FilteredFilms = movieList.filter(movieList=> {
  //     console.log(movieList.title)
  //     return movieList.title.toLowerCase().includes(searchterm.toLowerCase())
  // })

  //   set_movieList(FilteredFilms)
  // }, [searchterm])
  // console.log(movieList);

  return (
    <div className="App">
      <Sort SortBasedDuration={SortBasedDuration} />
      <div className="arrows">
        {order === "ascending" ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
      </div>
      <Header />
      <Search SearchFunction={SearchFunction} />
      <AllFilms movieList={movieList} />
      <AddForm addNewMovie={addNewMovie} />
    </div>
  );
}

export default App;
