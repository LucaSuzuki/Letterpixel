import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieById } from "../api/movieService"
import CardMovie from "./CardMovie"
import type { Movie } from "../model/movie"

const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState<Movie | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const movieId = Number(id)
    if (!movieId) {
      setMovie(null)
      return
    }

    setLoading(true)
    getMovieById(movieId)
      .then((data) => setMovie(data))
      .finally(() => setLoading(false))
  }, [id])

  if (!id) {
    return <p>Filme não encontrado.</p>
  }

  if (loading) {
    return <p>Carregando...</p>
  }

  if (!movie) {
    return <p>Filme não encontrado.</p>
  }

  return <CardMovie movie={movie} autoOpen />
}

export default MovieDetails
