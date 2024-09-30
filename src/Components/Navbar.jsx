import { Navbar,} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import github from "../components/Assets/github.png";
import gmail from "../components/Assets/gmail.png";
import linkedin from "../components/Assets/linkedin.png";
import logo from "../components/Assets/logo.png";
import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
/*import {
  BrowserRouter as Router
} from "react-router-dom";*/


//import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {
  const [activeLink , setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() =>{
    const onScroll =() =>{
      if (window.scrollY >50){
        setScrolled (true);
      } else{
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

//function BasicExample() {
  return (
    //<Router>
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
        <img src={logo} alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle className="basic-navbar-nav">
        <span className ="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick ={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skillls' ? 'active navbar-link' : 'navbar-link'}  onClick ={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}  onClick ={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://github.com/muskan36'><img src ={github} alt="" /></a>
              <a href='#'><img src ={gmail} alt="" /></a>
              <a href='https://www.linkedin.com/in/ritika-yadav-933052258'><img src ={linkedin} alt="" /></a>
            </div>
            <button className='vvd' onClick={() => console.log(connect)} > <span> Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   //</Router> 
  );
}

//export default BasicExample;