
import { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar';

import Carousels from './components/Carousal';
function App() {
     const [color,setColor] = useState(false)
     const scrollerhandler = () => {
      if (window.scrollY > 60) {
        console.log('scrolled');
        setColor(true);  // Change color or perform any state updates here
      }  else {
        setColor(false)
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', scrollerhandler);
  
      return () => {
        window.removeEventListener('scroll', scrollerhandler);
      };
    }, []);
  return (
    <>
    
    <Navbar color={color} />
    <Carousels/>
  
    
     
    </>
  )
}

export default App
