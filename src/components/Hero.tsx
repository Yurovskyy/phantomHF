import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero position-relative d-flex align-items-center text-light"
      style={{
        minHeight: "100vh",
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.7)), url("/images/hero-bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-3 fw-bold mb-4 fade-in">
              Transforming Wood into Art{" "}
              <span className="text-accent">Beneath Your Feet</span>
            </h1>
            <p
              className="lead mb-5 fade-in"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              Premium hardwood floor installation, restoration and maintenance
              services with our unique blend of traditional craftsmanship and
              modern technology.
            </p>
            <div className="d-flex justify-content-center gap-3 fade-in">
              <Button variant="primary" size="lg" href="#quote">
                Get a Free Quote
              </Button>
              <Button variant="outline-light" size="lg" href="#services">
                Explore Our Services
              </Button>
            </div>
            <div className="mt-5 pt-4 fade-in">
              <div className="d-flex justify-content-center text-center">
                <div className="mx-3">
                  <h3 className="text-accent mb-0">
                    <span className="counter">40</span>%
                  </h3>
                  <p className="mb-0">More Durable</p>
                </div>
                <div className="mx-3 border-start border-end px-4 border-light">
                  <h3 className="text-accent mb-0">
                    <span className="counter">500</span>+
                  </h3>
                  <p className="mb-0">Projects Completed</p>
                </div>
                <div className="mx-3">
                  <h3 className="text-accent mb-0">
                    Only <span className="counter">3</span>
                  </h3>
                  <p className="mb-0">Spots Available</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="position-absolute bottom-0 start-50 translate-middle-x pb-4 fade-in">
        <a href="#services" className="text-light">
          <i className="bi bi-chevron-double-down fs-3 bounce"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
