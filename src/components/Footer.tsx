import { Container, Row, Col } from "react-bootstrap";

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
            {/* NÚMERO DE TELEFONE E ÍCONE DE MENSAGEM ATUALIZADOS */}
            <p className="mb-1">
              <i className="bi bi-telephone-fill me-2"></i>
              <a href="tel:7329006603" className="text-light text-decoration-none">
                (732) 900-6603
              </a>
              <a href="sms:7329006603" className="text-light ms-2" aria-label="Send a Text Message">
                <i className="bi bi-chat-dots-fill"></i>
              </a>
            </p>
            {/* E-MAIL AGORA CLICÁVEL */}
            <p>
              <i className="bi bi-envelope-fill me-2"></i>
              <a href="mailto:phantomhardwoodfloors@gmail.com" className="text-light text-decoration-none">
                phantomhardwoodfloors@gmail.com
              </a>
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

          {/* Coluna do Newsletter comentada */}
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
