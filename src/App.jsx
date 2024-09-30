import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./Components/Navbar";
import { Banner } from "./Components/Banner";
import {Skills} from './Components/Skills'; 
import { Projects } from './Components/Projects';
import { Contact }  from './Components/Contact';
import {Footer} from './Components/Footer';


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='App'>
      <NavBar/>
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
     </div>
    </>
  )
}

export default App
