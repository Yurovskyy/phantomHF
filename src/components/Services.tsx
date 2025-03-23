import { Container, Row, Col, Card, Button, Accordion } from "react-bootstrap";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Hardwood Floor Installation",
      description:
        "Professional installation of new hardwood flooring with a variety of wood types and styles available.",
      icon: "bi-tools",
      image: "/images/services/installation.jpg",
      benefits: [
        "Expert precision installation",
        "Variety of wood species available",
        "Custom design options",
        "Long-lasting durability",
      ],
    },
    {
      id: 2,
      title: "Floor Restoration",
      description:
        "Bring your old, worn out hardwood floors back to life with our professional restoration services.",
      icon: "bi-arrow-repeat",
      image: "/images/services/restoration.jpg",
      benefits: [
        "Complete sanding and refinishing",
        "Repair of damaged sections",
        "Stain color matching",
        "Eco-friendly finishes",
      ],
    },
    {
      id: 3,
      title: "Maintenance & Repair",
      description:
        "Regular maintenance and repair services to keep your hardwood floors looking beautiful for years.",
      icon: "bi-wrench-adjustable",
      image: "/images/services/maintenance.jpg",
      benefits: [
        "Spot repairs for damaged areas",
        "Deep cleaning treatments",
        "Protective recoating",
        "Maintenance programs",
      ],
    },
    {
      id: 4,
      title: "Custom Flooring Design",
      description:
        "Create a unique floor design with custom inlays, borders, and patterns to match your style.",
      icon: "bi-palette",
      image: "/images/services/custom-design.jpg",
      benefits: [
        "Custom inlays and borders",
        "Mixed wood species designs",
        "Personalized patterns",
        "Artistic floor features",
      ],
    },
  ];

  const faqItems = [
    {
      question: "How long does hardwood floor installation take?",
      answer:
        "The timeframe varies depending on the size of the project, but typically a standard installation takes 3-5 days including acclimation, installation, finishing, and curing time.",
    },
    {
      question: "What types of wood do you offer?",
      answer:
        "We offer a wide range of domestic and exotic hardwoods including oak, maple, walnut, cherry, hickory, ash, mahogany, and more. Each has unique characteristics in terms of hardness, grain pattern, and color.",
    },
    {
      question: "How often should hardwood floors be refinished?",
      answer:
        "This depends on use and wear, but generally, hardwood floors should be refinished every 7-10 years. High-traffic areas may need attention sooner, while low-traffic areas can last longer.",
    },
    {
      question: "What makes your eco-friendly finishes different?",
      answer:
        "Our eco-friendly finishes are low-VOC or zero-VOC, meaning they emit fewer harmful chemicals. They're also 40% more durable than conventional finishes, providing better protection while being safer for your family and the environment.",
    },
    {
      question: "Do you offer warranties on your work?",
      answer:
        "Yes, we offer a comprehensive triple guarantee that covers materials, craftsmanship, and customer satisfaction. Our installation work is warranted for 5 years, and we include a free 6-month checkup with every project.",
    },
  ];

  return (
    <section id="services" className="section py-5">
      <Container>
        <Row className="mb-5 text-center">
          <Col>
            <span className="text-primary fw-bold">OUR SERVICES</span>
            <h2 className="display-5 fw-bold mt-2">
              Premium Hardwood Flooring Services
            </h2>
            <p className="lead" style={{ maxWidth: "700px", margin: "0 auto" }}>
              From installation to restoration, our expert team delivers
              exceptional quality with attention to detail, using our unique
              eco-friendly methods.
            </p>
          </Col>
        </Row>

        <Row>
          {services.map((service) => (
            <Col lg={6} className="mb-4" key={service.id}>
              <Card className="border-0 h-100 shadow-sm">
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="position-absolute top-0 start-0 p-3">
                    <div
                      className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i className={`bi ${service.icon} fs-3 text-light`}></i>
                    </div>
                  </div>
                </div>
                <Card.Body className="p-4">
                  <Card.Title className="fs-4 fw-bold mb-3">
                    {service.title}
                  </Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <h6 className="text-primary mt-4 mb-3">Benefits:</h6>
                  <ul className="ps-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="mb-2">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
                <Card.Footer className="bg-white border-0 p-4 pt-0">
                  <Button variant="outline-primary" className="w-100">
                    Learn More
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5 pt-4">
          <Col lg={10} className="mx-auto">
            <h3 className="mb-4 text-center">Frequently Asked Questions</h3>
            <Accordion>
              {faqItems.map((faq, index) => (
                <Accordion.Item
                  eventKey={index.toString()}
                  key={index}
                  className="mb-3 border rounded shadow-sm"
                >
                  <Accordion.Header>
                    <span className="fw-semibold">{faq.question}</span>
                  </Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
