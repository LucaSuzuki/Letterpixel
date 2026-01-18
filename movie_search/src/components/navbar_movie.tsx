import '../App.css'
import { Link } from "react-router-dom"
import Searchbar from './Searchbar'




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
        <Searchbar/>
      </ul>
    </nav>
  )
}

export default NavbarMovie