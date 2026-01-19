import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'


import './components/NavbarMovie'
import NavbarMovie from './components/NavbarMovie'
import Rating from "./components/Rating"
import Homepage from "./components/Homepage"
import MovieDetails from "./components/MovieDetails"

function App() {


  return (

      <BrowserRouter>        

        <div className='app'>
          <NavbarMovie />
          <Routes>
            <Route index element={<Homepage /> } />
            <Route path="/rating" element={<Rating /> } />
            <Route path="/movie/:id" element={<MovieDetails /> } />
          </Routes>


        </div>
      </BrowserRouter>
    
  )
}

export default App
