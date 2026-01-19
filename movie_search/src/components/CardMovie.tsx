import { Modal, Box, Button, } from "@mui/material"
import { useEffect, useState } from "react"

import RatingSystem from "./RatingSystem"
import { getCast } from "../api/movieService"
import type { Actor } from "../model/actor"


const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#001a03",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}

const CardMovie = ({ movie, autoOpen = false }: { movie: any; autoOpen?: boolean }) => {
  const [openParent, setOpenParent] = useState(false)
  const [openChild, setOpenChild] = useState(false)
  const [loading, setLoading] = useState(false)
  const [cast, setCast] = useState([])
  const POSTER_URL = "https://image.tmdb.org/t/p/w342/"
  const PROFILE_URL = "https://image.tmdb.org/t/p/w45/"
  useEffect(() => {
    if (autoOpen) {
      setOpenParent(true)
    }
  }, [autoOpen])
  function showCast() {
    setLoading(true)
    getCast(movie.id).then(response => {
      setCast(response)
      setOpenChild(true)
    }).finally(() => {
      setLoading(false)
    })

  }

  return (
    <>
      <Button onClick={() => setOpenParent(true)}>
        <figure>
          <img src={POSTER_URL + movie.poster_path} alt={movie.title} width={300} />
          <figcaption>{movie.title}</figcaption>
        </figure>

      </Button>

      {/* MODAL PAI */}
      <Modal
        open={openParent}
        onClose={() => setOpenParent(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>
          <RatingSystem movie={movie} />
          <h2 id="parent-modal-title">{movie.title}</h2>
          <p id="parent-modal-description">
            {movie.overview}
          </p>
          <h3>{movie.release_date}</h3>

          <Button onClick={() => showCast()}>
            {loading ? "..." : "Elenco"}
          </Button>

          {/* MODAL FILHO */}
          <Modal
            open={openChild}
            onClose={() => setOpenChild(false)}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"

          >
            <Box sx={{ ...style, width: 500 }}>
              <h3 id="child-modal-title">Elenco</h3>
              <p id="child-modal-description">
                {
                  cast.map((actor: Actor) =>
                    <figure>
                      <img src={PROFILE_URL + actor.profile_path} alt={actor.original_name} width={45} />
                      <figcaption>{actor.character + " (" + actor.original_name + ")"}</figcaption>
                    </figure>
                  )
                }

              </p>

              <Button onClick={() => setOpenChild(false)}>
                Voltar para o Filme
              </Button>
            </Box>
          </Modal>
        </Box>
      </Modal>
    </>
  )
}

export default CardMovie
