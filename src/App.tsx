// import BottomNavbar from "./BottomNavbar/BottomNavbar";
import BottomNavbarV3 from "../src/BottomNavbar/BottomNavbarV3/BottomNavbarV3";
import './App.css'
import { useState } from "react";
import image from './assets/icons/IMG_3845 (1).jpg';
function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="App">
      <div className={drawerOpen ? 'blur-background' : ''}>
        <img src={image} alt="dfasd" width={400} height={750} />
      </div>
      <BottomNavbarV3 setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen}/>
    </div>
  )
}

export default App
