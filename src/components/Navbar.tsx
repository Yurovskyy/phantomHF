import { useState, useEffect } from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  Button,
} from "react-bootstrap";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      className={`py-3 transition-all ${scrolled ? "bg-dark shadow-sm" : "bg-transparent"
        }`}
      variant={scrolled ? "dark" : "light"}
    >
      <Container>
        <BootstrapNavbar.Brand
          href="#home"
          className="d-flex align-items-center"
        >
          <img
            src="./logo.png"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
            alt="Phantom Hardwood Floors Logo"
          />
          <span className={`fw-bold ${scrolled ? "text-light" : "text-dark"}`}>
            Phantom <span className="text-accent">Hardwood</span> Floors
          </span>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={scrolled ? "text-light" : "text-dark"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#services"
              className={scrolled ? "text-light" : "text-dark"}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={scrolled ? "text-light" : "text-dark"}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#gallery"
              className={scrolled ? "text-light" : "text-dark"}
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={scrolled ? "text-light" : "text-dark"}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Button variant="primary" className="ms-lg-3" href="#contact">
            Get a Quote
          </Button>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
