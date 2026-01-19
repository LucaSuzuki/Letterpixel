import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'


import './components/NavbarMovie'
import NavbarMovie from './components/NavbarMovie'
import Moodal from "./components/CardMovie"
import Rating from "./components/Rating"
import Homepage from "./components/Homepage"
import CardMovie from "./components/CardMovie"

function App() {


  return (

      <BrowserRouter>        

        <div className='app'>
          <NavbarMovie />
          <Routes>
            <Route index element={<Homepage /> } />
            <Route path="/rating" element={<Rating /> } />
          </Routes>


        </div>
      </BrowserRouter>
    
  )
}

export default App
