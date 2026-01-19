
import CardMovie from "./CardMovie"
import { useEffect, useState } from "react"
import { getRatedMovies } from "../api/movieService"
import type { Movie } from "../model/movie"
import { getRatings } from "../api/ratingService"

const Rating = () => {

  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const fetchRatingsAndMovies = async () => {
      try {
        const ratings = await getRatings()  // espera os ratings
        const ids = ratings.map(item => item.movie_id)

        const data = await getRatedMovies(ids) // espera os filmes
        const moviesList = data.results ?? data

        const moviesWithRating = moviesList.map(movie => {
          const ratingObj = ratings.find(r => r.movie_id === movie.id)
          return {
            ...movie,
            movie_rating: ratingObj ? ratingObj.movie_rating : null
          }
        })

        console.log("Ratings:", ratings)
        console.log("IDs:", ids)
        console.log("Movies:", moviesList)
        console.log("Movies with rating:", moviesWithRating)

        setMovies(moviesWithRating)
      } catch (error) {
        console.error(error)
      }
    }

    fetchRatingsAndMovies()
  }, [])


  return (
    <>
      {movies.map(movie =>
        <CardMovie movie={movie} />
      )}

    </>
  )
}

export default Rating