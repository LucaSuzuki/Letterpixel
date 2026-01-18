import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'


import './components/navbar_movie'
import NavbarMovie from './components/navbar_movie'
import Moodal from "./components/Modal"
import Rating from "./components/Rating"
import Homepage from "./components/Homepage"

function App() {


  return (

      <BrowserRouter>        

        <div className='app'>
          <NavbarMovie />
          <Routes>
            <Route index element={<Homepage /> } />
            <Route path="/rating" element={<Rating /> } />
          </Routes>

        <Moodal/>

        </div>
      </BrowserRouter>
    
  )
}

export default App
