import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";
import MG from "../images/MG.png";

export function WebsiteNavbar() {
  const location = useLocation(); // Get current route

  return (
    <Navbar className="Navbar" sticky="top">
      <Container>
        <Nav className="Nav">
          <Nav.Link className={`Nav-link-logo ${location.pathname === "/" ? "active" : ""}`} href="/">
            <img src={MG} alt="Signature logo" className="Nav-logo" />
          </Nav.Link>
          <Nav.Link className={`Nav-link ${location.pathname === "/" ? "active" : ""}`} href="/">
            Home
          </Nav.Link>
          <Nav.Link className={`Nav-link ${location.pathname === "/about" ? "active" : ""}`} href="/#/about">
            About
          </Nav.Link>
          <Nav.Link className={`Nav-link ${location.pathname === "/tech-articles" ? "active" : ""}`} href="/#/tech-articles">
            Tech Articles
          </Nav.Link>
          <Nav.Link className={`Nav-link ${location.pathname === "/speaking" ? "active" : ""}`} href="/#/speaking">
            Speaking
            </Nav.Link>
          {/* <Nav.Link className={`Nav-link ${location.pathname === "/space-projects" ? "active" : ""}`} href="/#/space-projects">
            Space Projects
          </Nav.Link> */}
          <Nav.Link className={`Nav-link ${location.pathname === "/contact" ? "active" : ""}`} href="/#/contact">
            Contact
          </Nav.Link>

          {/* Icons Section */}
          <div className="Nav-icons">
            <Nav.Link className="Nav-icon" href="https://github.com/mgrinstein" target="_blank">
              <FaGithub size={20} />
            </Nav.Link>
            <Nav.Link className="Nav-icon" href="https://www.linkedin.com/in/moniquegrinstein" target="_blank">
              <FaLinkedin size={20} />
            </Nav.Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}
