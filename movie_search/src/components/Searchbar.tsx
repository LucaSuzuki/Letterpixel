import TextField from "@mui/material/TextField"
import { useState } from "react"

const [search, setSearch] = useState("")

const Searchbar = () => {
  return (
    <TextField
          sx={{
            input: { color: 'aliceblue'},
            label: { color: 'gray' },
            "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "green",            
              },
              
            "&.Mui-focused fieldset": {
              borderColor: "#88E788",
              }
              }}}
          id="outlined-basic"
          label="Pesquise um filme" variant="outlined" />
      
  )
}

export default Searchbar