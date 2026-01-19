import { Modal, Box, Button, } from "@mui/material"
import { useState } from "react"
import Filme from "../imgtest/capsule_616x353.jpg"
import RatingSystem from "./RatingSystem"
import type { Movie } from "../model/movie"

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

const CardMovie = ({movie}: any) => {
    const [openParent, setOpenParent] = useState(false)
    const [openChild, setOpenChild] = useState(false)
    const POSTER_URL = "https://image.tmdb.org/t/p/w342/" 

       return (
    <>
      <Button onClick={() => setOpenParent(true)}>
        <figure>
          <img src={POSTER_URL + movie.poster_path} alt={movie.title} width={300}/>
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
          <RatingSystem />
          <h2 id="parent-modal-title">UltraSuzuki</h2>
          <p id="parent-modal-description">
            Humanidade está morta. Sangue é combustível. O inferno está cheio.
            2h 30min
          </p>

          <Button onClick={() => setOpenChild(true)}>
            Elenco
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
                <figure>
                  <img src={Filme} alt="Filme" width={200}/>
                  <figcaption>Ultra (V1)</figcaption>
                </figure>
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