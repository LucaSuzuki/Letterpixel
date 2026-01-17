import '../App.css'
import { Link } from "react-router-dom"
import TextField from "@mui/material/TextField"



const NavbarMovie = ({ }) => {
  return (
    <nav className='navbar'>
      <ul>
        <h3><Link to="/">Página Inicial</Link></h3>
      </ul>

      <ul>
        <h3><Link to="/rating">Avaliações</Link></h3>
      </ul>

      <ul className='searchbar'>
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
      </ul>
    </nav>
  )
}

export default NavbarMovie