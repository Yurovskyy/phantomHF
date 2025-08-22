import { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    story?: string;
    before?: string;
  } | null>(null);

  const galleryItems = [
    // {
    //   id: 1,
    //   title: "Classic Oak Dining Room",
    //   description: "Solid oak hardwood with satin finish",
    //   image: "./images/gallery/dining-room.jpg",
    //   category: "installation",
    //   story:
    //     "The Johnson family wanted to update their 1980s dining room with a timeless look. We installed solid oak hardwood with a warm honey stain and satin finish to complement their antique furniture.",
    // },
    {
      id: 2,
      title: "Modern Living Room Makeover",
      description: "Natural walnut ",
      image: "./images/gallery/living-room.jpg",
      category: "installation",
      story:
        "For this contemporary downtown loft, we selected natural walnut with a matte finish to create a sophisticated foundation for the client's modern furniture collection.",
    },
    {
      id: 3,
      title: "Bedroom Restoration",
      description: "Original white oak floors restored to their former glory",
      image: "./images/gallery/bedroom.jpg",
      category: "installation",
      // before: "./images/gallery/victorian-before.jpg",
      story:
        "This 1890s brownstone had original white oak floors hidden under layers of carpet and linoleum. We carefully restored them to showcase the home's historic character.",
    },
    // {
    //   id: 4,
    //   title: "Custom Parquet Design",
    //   description: "Mixed woods in a bespoke herringbone pattern",
    //   image: "./images/gallery/custom-design.jpg",
    //   category: "design",
    //   story:
    //     "Our client wanted something truly unique for their foyer. We created this stunning herringbone pattern using three complementary wood species: oak, walnut, and maple.",
    // },
    // {
    //   id: 5,
    //   title: "Luxury Apartment Renovation",
    //   description: "European white oak with custom finish",
    //   image: "./images/gallery/apartment.jpg",
    //   category: "installation",
    //   story:
    //     "For this high-end apartment renovation, we imported European white oak and applied a custom finish to achieve the exact color the interior designer specified.",
    // },
    // {
    //   id: 6,
    //   title: "Weathered Floor Revival",
    //   description: "Mahogany floors rescued from water damage",
    //   image: "./images/gallery/mahogany-after.jpg",
    //   category: "restoration",
    //   before: "./images/gallery/mahogany-before.jpg",
    //   story:
    //     "After a plumbing leak, these beautiful mahogany floors seemed beyond repair. We successfully restored them, saving the homeowner thousands compared to replacement.",
    // },
    {
      id: 7,
      title: "Kitchen Flooring",
      description: "Rich hardwood with semi-gloss finish",
      image: "./images/gallery/kitchen.jpg",
      category: "installation",
      story:
        "Dark wood was the perfect choice for this kitchen renovation, adding warmth and complementing the natural stone countertops.",
    },
    // {
    //   id: 8,
    //   title: "Commercial Showroom Floor",
    //   description: "Durable ash flooring for high-traffic retail space",
    //   image: "./images/gallery/commercial.jpg",
    //   category: "commercial",
    //   story:
    //     "This luxury retailer needed flooring that would stand up to heavy foot traffic while maintaining a high-end appearance. We selected ash with our toughest commercial-grade finish.",
    // },
    // {
    //   id: 9,
    //   title: "Designer Inlay Feature",
    //   description: "Custom medallion inlay with multiple wood species",
    //   image: "./images/gallery/medallion.jpg",
    //   category: "design",
    //   story:
    //     "The centerpiece of this grand entrance hall is our custom designed medallion featuring six different woods and intricate laser-cut inlays.",
    // },
    // {
    //   id: 10,
    //   title: "Historic Home Transformation",
    //   description: "Original maple floors brought back to life",
    //   image: "./images/gallery/historic-after.jpg",
    //   category: "restoration",
    //   before: "./images/gallery/historic-before.jpg",
    //   story:
    //     "These 100-year-old maple floors were covered by carpet for decades. Our restoration process revealed their natural beauty while preserving their authentic character and patina.",
    // },
    // {
    //   id: 11,
    //   title: "Timelapse: Restaurant Installation",
    //   description: "Watch our team install 2,500 sq ft in just 5 days",
    //   image: "./images/gallery/timelapse.jpg",
    //   category: "commercial",
    //   story:
    //     "We completed this restaurant installation on a tight timeline to minimize business disruption. The time-lapse video showcases our efficient process from subfloor prep to final finish.",
    // },
    // {
    //   id: 12,
    //   title: "Beach House Engineered Flooring",
    //   description: "Engineered white oak for coastal conditions",
    //   image: "./images/gallery/beach-house.jpg",
    //   category: "installation",
    //   story:
    //     "For this oceanfront property, we selected engineered white oak with a specialized finish to withstand humidity fluctuations and salt air exposure.",
    // },
    {
      id: 13,
      title: "Living Room",
      description: "Natural walnut with matte finish",
      image: "./images/gallery/living-room2.jpg",

      category: "installation",
      story:
        "For this oceanfront property, we selected engineered pine wood with a specialized finish to withstand humidity fluctuations and salt air exposure.",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const handleImageClick = (item: (typeof galleryItems)[0]) => {
    setSelectedImage(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const filters = [
    { id: "all", label: "All" },
    { id: "installation", label: "New Installations" },
    { id: "restoration", label: "Restoration" },
    { id: "design", label: "Custom Designs" },
    { id: "commercial", label: "Commercial" },
  ];

  return (
    <section id="gallery" className="section py-5">
      <Container>
        <Row className="mb-5 text-center">
          <Col>
            <span className="text-primary fw-bold">OUR WORK</span>
            <h2 className="display-5 fw-bold mt-2">Project Gallery</h2>
            <p className="lead" style={{ maxWidth: "700px", margin: "0 auto" }}>
              Browse our collection of completed projects showcasing our
              craftsmanship and attention to detail.
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="text-center">
            <div className="d-flex justify-content-center flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={
                    activeFilter === filter.id ? "primary" : "outline-primary"
                  }
                  className="mb-2"
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="g-4">
          {filteredItems.map((item) => (
            <Col lg={4} md={6} key={item.id}>
              <Card className="gallery-item border-0 shadow-sm h-100">
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: "250px" }}
                >
                  <Card.Img
                    variant="top"
                    src={item.image}
                    className="gallery-image"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                    alt={item.title}
                  />
                  <div
                    className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{
                      background: "rgba(0,0,0,0.6)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      cursor: "pointer",
                    }}
                    onClick={() => handleImageClick(item)}
                  >
                    <Button
                      variant="light"
                      className="rounded-circle"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <i className="bi bi-zoom-in"></i>
                    </Button>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button
                    variant="link"
                    className="p-0 text-primary"
                    onClick={() => handleImageClick(item)}
                  >
                    View Details <i className="bi bi-arrow-right"></i>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Lightbox Modal */}
      <Modal
        show={showModal}
        onHide={closeModal}
        size="lg"
        centered
        className="gallery-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedImage?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedImage?.before ? (
            <div className="before-after-container">
              <div className="row mb-4">
                <div className="col-md-6 mb-3 mb-md-0">
                  <div className="position-relative">
                    <img
                      src={selectedImage.before}
                      alt="Before"
                      className="img-fluid rounded"
                    />
                    <div className="position-absolute top-0 start-0 bg-dark text-light px-3 py-1 m-2 rounded">
                      Before
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative">
                    <img
                      src={selectedImage.image}
                      alt="After"
                      className="img-fluid rounded"
                    />
                    <div className="position-absolute top-0 start-0 bg-primary text-light px-3 py-1 m-2 rounded">
                      After
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <img
              src={selectedImage?.image}
              alt={selectedImage?.title}
              className="img-fluid rounded mb-4"
            />
          )}
          <h5>Project Story</h5>
          <p>{selectedImage?.story}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* CSS for hover effects */}
      <style>
        {`
          .gallery-item:hover .gallery-image {
            transform: scale(1.05);
          }
          .gallery-item:hover .gallery-overlay {
            opacity: 1;
          }
        `}
      </style>
    </section>
  );
};

export default Gallery;
