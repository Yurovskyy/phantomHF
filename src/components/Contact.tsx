import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="section py-5">
      <Container>
        <Row className="mb-5 text-center">
          <Col>
            <span className="text-primary fw-bold">CONTACT US</span>
            <h2 className="display-5 fw-bold mt-2">Get in Touch</h2>
            <p className="lead" style={{ maxWidth: "700px", margin: "0 auto" }}>
              Have questions or ready to discuss your flooring project? Our team
              is here to help.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={5} className="mb-4 mb-lg-0">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4 p-md-5">
                <h3 className="mb-4">Contact Information</h3>

                {/* <div className="d-flex align-items-center mb-4">
                  <div
                    className="rounded-circle bg-primary d-flex align-items-center justify-content-center me-3"
                    style={{ width: "45px", height: "45px", minWidth: "45px" }}
                  >
                    <i className="bi bi-geo-alt-fill text-light"></i>
                  </div>
                  <div>
                    <h5 className="mb-1">Address</h5>
                    <p className="mb-0">
                      1234 Hardwood Ave, New York, NY 10001
                    </p>
                  </div>
                </div> */}

                <div className="d-flex align-items-center mb-4">
                  <div
                    className="rounded-circle bg-primary d-flex align-items-center justify-content-center me-3"
                    style={{ width: "45px", height: "45px", minWidth: "45px" }}
                  >
                    <i className="bi bi-telephone-fill text-light"></i>
                  </div>
                  <div>
                    <h5 className="mb-1">Phone</h5>
                    <p className="mb-0">(732)900-6603</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div
                    className="rounded-circle bg-primary d-flex align-items-center justify-content-center me-3"
                    style={{ width: "45px", height: "45px", minWidth: "45px" }}
                  >
                    <i className="bi bi-envelope-fill text-light"></i>
                  </div>
                  <div>
                    <h5 className="mb-1">Email</h5>
                    <p className="mb-0">phantomhardwoodfloors@gmail.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div
                    className="rounded-circle bg-primary d-flex align-items-center justify-content-center me-3"
                    style={{ width: "45px", height: "45px", minWidth: "45px" }}
                  >
                    <i className="bi bi-clock-fill text-light"></i>
                  </div>
                  <div>
                    <h5 className="mb-1">Business Hours</h5>
                    <p className="mb-0">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="mb-0">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="mb-0">Sunday: Closed</p>
                  </div>
                </div>

                <h5 className="mb-3 mt-5">Connect With Us</h5>
                <div className="d-flex">
                  <a
                    href="#"
                    className="me-3 social-icon"
                    aria-label="Facebook"
                  >
                    <div
                      className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="bi bi-facebook text-light"></i>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/phantomhardwood/"
                    target="_blank"
                    className="me-3 social-icon"
                    aria-label="Instagram"
                  >
                    <div
                      className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="bi bi-instagram text-light"></i>
                    </div>
                  </a>
                  {/* <a
                    href="#"
                    className="me-3 social-icon"
                    aria-label="Pinterest"
                  >
                    <div
                      className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="bi bi-pinterest text-light"></i>
                    </div>
                  </a>
                  <a href="#" className="social-icon" aria-label="YouTube">
                    <div
                      className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="bi bi-youtube text-light"></i>
                    </div>
                  </a> */}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={7}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4 p-md-5">
                <h3 className="mb-4">Send us a Message</h3>
                <Form>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="contactName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="contactEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="contactPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Enter your phone number"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="contactSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Enter subject" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-4" controlId="contactMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Your message"
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" size="lg">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5 pt-4">
          <Col xs={12}>
            <h3 className="text-center mb-4">Our Service Area</h3>
            <div
              className="map-container"
              style={{ height: "400px", width: "100%", position: "relative" }}
            >
              <img
                src="/images/map-ny.jpg"
                alt="Service area map - New York metro area"
                className="img-fluid w-100 h-100 rounded shadow-sm"
                style={{ objectFit: "cover" }}
              />
              <div
                className="position-absolute top-50 start-50 translate-middle bg-primary text-light p-3 rounded-circle shadow"
                style={{
                  width: "130px",
                  height: "130px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <i className="bi bi-geo-alt-fill fs-3 mb-1"></i>
                <p className="fw-bold mb-0 text-center">
                  New York
                  <br />
                  Metro Area
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
