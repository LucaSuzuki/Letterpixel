import { Pagination } from "@mui/material"
import CardMovie from "./CardMovie"
import { useEffect, useState } from "react"
import { getMovies } from "../api/movieService"
import type { Movie } from "../model/movie"

const Homepage = () => {
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies(page)
      setMovies(data.results ?? data)
      setTotalPages(Math.min(data.total_pages, 500))
    }



    fetchMovies()
  }, [page])

  return (
    <>
      {movies.map(movie =>
        <CardMovie movie={movie} />
      )}
      <Pagination
        sx={{
          "& .MuiPaginationItem-root": {
            color: "white",
          },
          "& .Mui-selected": {
            backgroundColor: "#88E788",
            color: "#000",
          },
          "& .MuiPaginationItem-root:hover": {
            backgroundColor: "#66cc66",
          },
        }}
        count={totalPages} page={page} onChange={(event, value) => setPage(value)} />
    </>
  )
}

export default Homepage