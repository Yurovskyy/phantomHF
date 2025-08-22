import { useState, ChangeEvent } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  projectType: string;
  squareFootage: string;
  timeframe: string;
  budget: string;
  preferredContact: string;
  message: string;
  howHeard: string;
}

const QuoteForm = () => {
  const [step, setStep] = useState(1);
  const [submitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    projectType: "",
    squareFootage: "",
    timeframe: "",
    budget: "",
    preferredContact: "email",
    message: "",
    howHeard: "",
  });

  const totalSteps = 3;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Cria a string do corpo do e-mail com todas as informações do formulário
    const emailBody = `
      Quote Request Details:
      
      Personal Information:
      - Name: ${formData.firstName} ${formData.lastName}
      - Email: ${formData.email}
      - Phone: ${formData.phone}
      - Preferred Contact Method: ${formData.preferredContact}
      
      Address:
      - Street: ${formData.address}
      - City: ${formData.city}
      - State: ${formData.state}
      - Zip Code: ${formData.zipCode}
      
      Project Details:
      - Project Type: ${formData.projectType}
      - Approximate Square Footage: ${formData.squareFootage}
      - Desired Timeframe: ${formData.timeframe || "Not specified"}
      - Budget Range: ${formData.budget || "Not specified"}
      
      Additional Details:
      - Message: ${formData.message || "No additional details."}
      
      How they heard about us:
      - ${formData.howHeard || "Not specified."}
    `;

    // Codifica a URL para garantir que o texto do corpo do e-mail seja formatado corretamente
    const subject = encodeURIComponent("New Quote Request from Website");
    const body = encodeURIComponent(emailBody);

    // Redireciona para o mensageiro de e-mail com os dados preenchidos
    window.location.href = `mailto:phantomhardwoodfloors@gmail.com?subject=${subject}&body=${body}`;

    // Não defina o estado 'submitted' aqui, pois o usuário sairá da página
    // setSubmitted(true);
    // window.scrollTo(0, 0);
  };

  const renderStepIndicator = () => {
    return (
      <div className="step-indicator d-flex justify-content-center mb-4">
        {[...Array(totalSteps)].map((_, index) => (
          <div key={index} className="d-flex align-items-center">
            <div
              className={`step-circle rounded-circle d-flex align-items-center justify-content-center ${
                index + 1 === step ? "active" : ""
              } ${index + 1 < step ? "completed" : ""}`}
              style={{
                width: "40px",
                height: "40px",
                background:
                  index + 1 === step
                    ? "var(--color-primary)"
                    : index + 1 < step
                    ? "var(--color-accent)"
                    : "#ddd",
                color: index + 1 <= step ? "white" : "var(--color-dark)",
              }}
            >
              {index + 1 < step ? (
                <i className="bi bi-check-lg"></i>
              ) : (
                index + 1
              )}
            </div>
            {index < totalSteps - 1 && (
              <div
                className="step-line mx-2"
                style={{
                  height: "2px",
                  width: "50px",
                  background: index + 1 < step ? "var(--color-accent)" : "#ddd",
                }}
              ></div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderStepContent = () => {
    // A tela de sucesso não será exibida mais, pois o usuário será redirecionado
    // if (submitted) {
    //   return (
    //     <Alert variant="success" className="text-center p-4">
    //       <i className="bi bi-check-circle fs-1 text-success mb-3 d-block"></i>
    //       <h4>Thank You!</h4>
    //       <p>
    //         Your quote request has been submitted successfully. One of our
    //         representatives will contact you within 24 hours.
    //       </p>
    //       <Button
    //         variant="primary"
    //         onClick={() => (window.location.href = "#home")}
    //       >
    //         Return to Home
    //       </Button>
    //     </Alert>
    //   );
    // }

    switch (step) {
      case 1:
        return (
          <>
            <h4 className="mb-4">Personal Information</h4>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="firstName">
                  <Form.Label>First Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="email">
                  <Form.Label>Email Address *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="phone">
                  <Form.Label>Phone Number *</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="mb-3">
                <Form.Group controlId="address">
                  <Form.Label>Street Address *</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4} className="mb-3">
                <Form.Group controlId="city">
                  <Form.Label>City *</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4} className="mb-3">
                <Form.Group controlId="state">
                  <Form.Label>State *</Form.Label>
                  <Form.Select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select State</option>
                    <option value="NY">New York</option>
                    <option value="NJ">New Jersey</option>
                    <option value="CT">Connecticut</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4} className="mb-3">
                <Form.Group controlId="zipCode">
                  <Form.Label>Zip Code *</Form.Label>
                  <Form.Control
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="mb-3">
                <Form.Group controlId="preferredContact">
                  <Form.Label>Preferred Contact Method</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      label="Email"
                      name="preferredContact"
                      id="contactEmail"
                      value="email"
                      checked={formData.preferredContact === "email"}
                      onChange={handleInputChange}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="Phone"
                      name="preferredContact"
                      id="contactPhone"
                      value="phone"
                      checked={formData.preferredContact === "phone"}
                      onChange={handleInputChange}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="Text Message"
                      name="preferredContact"
                      id="contactText"
                      value="text"
                      checked={formData.preferredContact === "text"}
                      onChange={handleInputChange}
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </>
        );
      case 2:
        return (
          <>
            <h4 className="mb-4">Project Details</h4>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="projectType">
                  <Form.Label>Project Type *</Form.Label>
                  <Form.Select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Project Type</option>
                    <option value="new-installation">New Installation</option>
                    <option value="restoration">Restoration/Refinishing</option>
                    <option value="repair">Repair</option>
                    <option value="custom-design">Custom Design</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="squareFootage">
                  <Form.Label>Approximate Square Footage *</Form.Label>
                  <Form.Control
                    type="text"
                    name="squareFootage"
                    value={formData.squareFootage}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="timeframe">
                  <Form.Label>Desired Timeframe</Form.Label>
                  <Form.Select
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Timeframe</option>
                    <option value="asap">As Soon As Possible</option>
                    <option value="1-month">Within 1 Month</option>
                    <option value="3-months">Within 3 Months</option>
                    <option value="6-months">Within 6 Months</option>
                    <option value="planning">Just Planning</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="budget">
                  <Form.Label>Budget Range</Form.Label>
                  <Form.Select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Budget Range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-20k">$10,000 - $20,000</option>
                    <option value="20k-50k">$20,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="mb-3">
                <Form.Group controlId="message">
                  <Form.Label>Additional Details</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your project in detail, including any specific requirements or questions you may have."
                  />
                </Form.Group>
              </Col>
            </Row>
          </>
        );
      case 3:
        return (
          <>
            <h4 className="mb-4">Review & Submit</h4>
            <Card className="mb-4">
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <h5 className="mb-3">Personal Information</h5>
                    <p className="mb-1">
                      <strong>Name:</strong> {formData.firstName}{" "}
                      {formData.lastName}
                    </p>
                    <p className="mb-1">
                      <strong>Email:</strong> {formData.email}
                    </p>
                    <p className="mb-1">
                      <strong>Phone:</strong> {formData.phone}
                    </p>
                    <p className="mb-1">
                      <strong>Address:</strong> {formData.address}
                    </p>
                    <p className="mb-1">
                      <strong>Location:</strong> {formData.city},{" "}
                      {formData.state} {formData.zipCode}
                    </p>
                    <p className="mb-1">
                      <strong>Preferred Contact:</strong>{" "}
                      {formData.preferredContact}
                    </p>
                  </Col>
                  <Col md={6}>
                    <h5 className="mb-3">Project Details</h5>
                    <p className="mb-1">
                      <strong>Project Type:</strong> {formData.projectType}
                    </p>
                    <p className="mb-1">
                      <strong>Square Footage:</strong> {formData.squareFootage}
                    </p>
                    <p className="mb-1">
                      <strong>Timeframe:</strong>{" "}
                      {formData.timeframe || "Not specified"}
                    </p>
                    <p className="mb-1">
                      <strong>Budget:</strong>{" "}
                      {formData.budget || "Not specified"}
                    </p>
                  </Col>
                </Row>
                {formData.message && (
                  <Row className="mt-3">
                    <Col xs={12}>
                      <h5 className="mb-2">Additional Details</h5>
                      <p>{formData.message}</p>
                    </Col>
                  </Row>
                )}
              </Card.Body>
            </Card>
            <Row className="mb-3">
              <Col xs={12}>
                <Form.Group controlId="howHeard">
                  <Form.Label>How did you hear about us?</Form.Label>
                  <Form.Select
                    name="howHeard"
                    value={formData.howHeard}
                    onChange={handleInputChange}
                  >
                    <option value="">Select an option</option>
                    <option value="search">Search Engine</option>
                    <option value="social">Social Media</option>
                    <option value="friend">Friend/Family Referral</option>
                    <option value="home-show">Home Show/Event</option>
                    <option value="magazine">Magazine/Publication</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="termsCheck"
                required
              />
              <label className="form-check-label" htmlFor="termsCheck">
                I agree to the{" "}
                <a href="#" className="text-primary">
                  terms and conditions
                </a>{" "}
                and consent to be contacted regarding my quote request.
              </label>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section id="quote" className="section py-5 bg-light">
      <Container>
        <Row className="mb-5 text-center">
          <Col>
            <span className="text-primary fw-bold">GET STARTED</span>
            <h2 className="display-5 fw-bold mt-2">Request a Free Quote</h2>
            <p className="lead" style={{ maxWidth: "700px", margin: "0 auto" }}>
              Fill out the form below and one of our flooring specialists will
              contact you to discuss your project and provide a detailed quote.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="mx-auto">
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4 p-md-5">
                {renderStepIndicator()}

                <Form onSubmit={handleSubmit}>
                  {renderStepContent()}

                  {!submitted && (
                    <div className="d-flex justify-content-between mt-4">
                      {step > 1 && (
                        <Button
                          variant="outline-secondary"
                          onClick={handlePrevStep}
                        >
                          <i className="bi bi-arrow-left me-2"></i>Previous
                        </Button>
                      )}
                      {step < totalSteps ? (
                        <Button
                          variant="primary"
                          onClick={handleNextStep}
                          className={`ms-auto ${step === 1 ? "" : ""}`}
                        >
                          Next<i className="bi bi-arrow-right ms-2"></i>
                        </Button>
                      ) : (
                        <Button
                          variant="primary"
                          type="submit"
                          className="ms-auto"
                        >
                          Submit Quote Request
                        </Button>
                      )}
                    </div>
                  )}
                </Form>
              </Card.Body>
            </Card>

            <div className="text-center mt-4">
              <p className="small text-muted">
                <i className="bi bi-shield-check me-1"></i> Your information is
                secure and will never be shared with third parties.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={4} className="mb-4 mb-md-0">
            <Card className="h-100 text-center border-0 shadow-sm py-4">
              <Card.Body>
                <div
                  className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{ width: "70px", height: "70px" }}
                >
                  <i className="bi bi-award text-light fs-3"></i>
                </div>
                <h4>Triple Guarantee</h4>
                <p>
                  Our work is backed by our comprehensive triple guarantee on
                  materials, craftsmanship, and your satisfaction.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <Card className="h-100 text-center border-0 shadow-sm py-4">
              <Card.Body>
                <div
                  className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{ width: "70px", height: "70px" }}
                >
                  <i className="bi bi-calendar-check text-light fs-3"></i>
                </div>
                <h4>Free 6-Month Check-up</h4>
                <p>
                  Every project includes a free 6-month inspection to ensure
                  your floors remain in perfect condition.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center border-0 shadow-sm py-4">
              <Card.Body>
                <div
                  className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{ width: "70px", height: "70px" }}
                >
                  <i className="bi bi-currency-dollar text-light fs-3"></i>
                </div>
                <h4>Flexible Financing</h4>
                <p>
                  We offer a variety of payment options and financing plans to
                  fit your budget and needs.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QuoteForm;
