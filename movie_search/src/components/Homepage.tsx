import { Pagination } from "@mui/material"
import CardMovie from "./CardMovie"
import { useState } from "react"

const Homepage = () => {
  const pages = 10
  const [page, setPage] = useState(1)
  const movies = [
    { nome: "Nome", poster: "IMG", id: 1 },
    { nome: "Outro nome", poster: "outroIMG", id: 2 }
  ]
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
        count={pages} page={page} onChange={(event, value) => setPage(value)} />
    </>
  )
}

export default Homepage