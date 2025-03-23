import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row className="mb-4">
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="text-accent mb-3">Phantom Hardwood Floors</h5>
            <p>"Transforming wood into art beneath your feet"</p>
            <p className="mb-1">
              <i className="bi bi-geo-alt-fill me-2"></i> New York Metro Area
            </p>
            <p className="mb-1">
              <i className="bi bi-telephone-fill me-2"></i> (555) 123-4567
            </p>
            <p>
              <i className="bi bi-envelope-fill me-2"></i>{" "}
              info@phantomhardwoodfloors.com
            </p>
          </Col>

          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="text-accent mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-light text-decoration-none">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#gallery" className="text-light text-decoration-none">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={4} className="mb-4 mb-md-0">
            <h5 className="text-accent mb-3">Newsletter</h5>
            <p>
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="bg-dark-light border-0 text-light"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="border-top border-secondary pt-4">
          <Col md={6} className="text-center text-md-start">
            <p className="small mb-0">
              &copy; {currentYear} Phantom Hardwood Floors. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="#" className="text-light me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-light me-3">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-light me-3">
              <i className="bi bi-pinterest"></i>
            </a>
            <a href="#" className="text-light">
              <i className="bi bi-youtube"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
