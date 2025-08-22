import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  const certifications = [
    {
      id: 1,
      title: "National Wood Flooring Association",
      icon: "bi-award",
      description: "Certified professional installers",
    },
    {
      id: 2,
      title: "GreenGuard Certified",
      icon: "bi-tree",
      description: "Eco-friendly materials and processes",
    },
    {
      id: 3,
      title: "Home Builders Association",
      icon: "bi-house",
      description: "Trusted contractor member",
    },
    {
      id: 4,
      title: "Better Business Bureau",
      icon: "bi-shield-check",
      description: "A+ Rating accredited business",
    },
  ];

  return (
    <section id="about" className="section py-5 bg-light">
      <Container>
        <Row className="mb-5 text-center">
          <Col>
            <span className="text-primary fw-bold">ABOUT US</span>
            <h2 className="display-5 fw-bold mt-2">Our Story & Expertise</h2>
            <p className="lead" style={{ maxWidth: "700px", margin: "0 auto" }}>
              Discover the craftsmen behind Phantom Hardwood Floors and our
              commitment to exceptional quality.
            </p>
          </Col>
        </Row>

        <Row className="text-center justify-content-center">
          {/* <Col lg={6} className="mb-4 mb-lg-0">
            <div className="position-relative">
              <img
                src="./images/about/workshop.jpg"
                alt="Craftsmen at work"
                className="img-fluid rounded shadow-lg"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <div
                className="position-absolute bg-accent text-dark p-3 rounded shadow-lg"
                style={{ bottom: "20px", right: "-20px", maxWidth: "200px" }}
              >
                <p className="h4 mb-0">10+ Years</p>
                <p className="mb-0">of combined experience</p>
              </div>
            </div>
          </Col> */}
          <Col lg={6}>
            <h3 className="mb-4">Our Commitment to Quality</h3>
            <p>
              Phantom Hardwood Floors was established with a clear vision: to
              transform ordinary spaces into extraordinary showcases through the
              artistry of fine hardwood flooring. Our founder, with over 15
              years of experience in traditional woodworking, assembled a team
              of like-minded artisans who share his passion for craftsmanship.
            </p>
            <p>
              What sets us apart is our unique combination of time-honored
              techniques and cutting-edge technology. While we respect
              traditional methods that have stood the test of time, we embrace
              innovations that enhance durability and sustainability.
            </p>
            <p>
              Our eco-friendly sealants are a testament to this philosophy.
              Developed exclusively for us, these finishes are 40% more durable
              than conventional methods while maintaining a minimal
              environmental footprint. This dedication to quality has earned us
              recognition and trust throughout the New York metro area.
            </p>
            <div className="d-flex align-items-center mt-4 text-center justify-content-center ">
              <div>
                <p className="fw-bold mb-0">Augusto Matias</p>
                <p className="text-muted mb-0">Founder & Master Craftsman</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 pt-4">
          <Col xs={12} className="mb-4 text-center">
            <h3>Certifications & Commitments</h3>
          </Col>
          {certifications.map((cert) => (
            <Col lg={3} md={6} className="mb-4" key={cert.id}>
              <Card className="h-100 text-center border-0 shadow-sm p-3">
                <Card.Body>
                  <i className={`bi ${cert.icon} text-primary fs-1 mb-3`}></i>
                  <Card.Title className="fw-bold">{cert.title}</Card.Title>
                  <Card.Text>{cert.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* <Row className="mt-5 pt-3 bg-dark text-light p-4 rounded">
          <Col lg={8} className="mx-auto text-center">
            <i className="bi bi-tree-fill text-accent fs-1 mb-3"></i>
            <h3 className="mb-3">Our Environmental Commitment</h3>
            <p className="lead">
              For every project we complete, we contribute to reforestation
              efforts. To date, our work has helped plant over 5,000 trees
              across North America.
            </p>
            <p>
              We believe that beautiful hardwood floors and environmental
              responsibility go hand in hand. That's why we source our materials
              from sustainable forests and use eco-friendly finishes in all our
              projects.
            </p>
          </Col>
        </Row> */}
      </Container>
    </section>
  );
};

export default About;
