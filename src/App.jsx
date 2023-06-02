import axios from 'axios'
import {  BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import "./style.css"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/:pokemonId" element={<Pokemon />} /> */}
      </Routes>
    </>
  )
}

export default App
