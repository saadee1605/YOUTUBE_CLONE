import './App.css';
import Navbar from './Components/JSX/Navbar';
import SideBar from './Components/JSX/SideBar';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [nav, applyNav] = useState(true)
  const setNavbar = () => {
    applyNav(!nav)
    console.log(nav);
  }
  return (
    <div >
      <BrowserRouter>
        <Navbar setNav={setNavbar} />
        <Routes>
          <Route path='/' element={<Home  status={nav}/>} />
          <Route path='/video/:categoryId/:VideoId' element={<Video />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
