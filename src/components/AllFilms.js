import { FilmDetails } from "./FilmDetails/FilmDetails"

export default function AllFilms({ movieList }) {
    return (
        <div className="films"  >
        {movieList.map((film, index) => {
          return (
            < FilmDetails
              key={index}
              film={film}
              
            />)
                })}

        </div>
    )
}
