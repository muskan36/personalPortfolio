import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
import logo from "../img/logo.png";
import github from "../img/github.png";
import gmail from "../img/gmail.png";
import linkedin from "../img/linkedin.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon1" >
              <a href="https://github.com/muskan36"><img src={github} alt="Icon" /></a>
              <a href="#"><img src={gmail} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/ritika-yadav-933052258"><img src={linkedin} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}