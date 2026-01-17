import { Modal, Box, Button } from "@mui/material"
import { useState } from "react"


const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}

const Moodal = () => {
    const [openParent, setOpenParent] = useState(false)
    const [openChild, setOpenChild] = useState(false)

       return (
    <>
      <Button onClick={() => setOpenParent(true)}>
        Abrir modal
      </Button>

      {/* MODAL PAI */}
      <Modal
        open={openParent}
        onClose={() => setOpenParent(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>
          <h2 id="parent-modal-title">Modal principal</h2>
          <p id="parent-modal-description">
            Conteúdo do modal principal
          </p>

          <Button onClick={() => setOpenChild(true)}>
            Abrir modal interno
          </Button>

          {/* MODAL FILHO */}
          <Modal
            open={openChild}
            onClose={() => setOpenChild(false)}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box sx={{ ...style, width: 200 }}>
              <h3 id="child-modal-title">Modal interno</h3>
              <p id="child-modal-description">
                Conteúdo do modal interno
              </p>

              <Button onClick={() => setOpenChild(false)}>
                Fechar interno
              </Button>
            </Box>
          </Modal>
        </Box>
      </Modal>
    </>
  )
}

export default Moodal