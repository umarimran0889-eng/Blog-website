import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Accordion,
} from "react-bootstrap";
import PhoneInputLib from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactMain.css";

import Contacticon1 from "../assets/Group 260 (1).png";
import Contacticon2 from "../assets/Icon (6).png";

const PhoneInput = PhoneInputLib.default || PhoneInputLib;

const faqData = [
  {
    question: "What is AI?",
    answer:
      "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
  },
  {
    question: "How can I listen to your podcasts?",
    answer:
      "You can stream our podcasts directly from our website or platforms like Spotify and Apple Podcasts.",
  },
  {
    question: "Are your podcasts free to listen to?",
    answer: "Yes, all standard podcast episodes are completely free.",
  },
  {
    question: "Can I download episodes to listen offline?",
    answer:
      "Yes, you can download episodes from our mobile application or supported platforms.",
  },
  {
    question: "How often do you release new episodes?",
    answer: "We release new episodes every Tuesday and Thursday morning.",
  },
];

const ContactFAQ = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      alert("Please agree to the Terms of Use and Privacy Policy.");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent.");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      agreeToTerms: false,
    });
  };

  return (
    <div className="contact-page-wrapper">
      <Container fluid className="contact-main-container p-0">
        {/* UPPER ROW: Get In Touch Title & Form Section */}
        <Row className="g-0 row-divider-bottom">
          <Col lg={4} className="col-divider-right padding-custom d-flex flex-column justify-content-center">
            <div className="section-header-block">
              <img src={Contacticon1} alt="Get in Touch" className="mb-4 brand-icon" />
              <h1 className="main-title">Get in Touch with AI Podcasts</h1>
            </div>
          </Col>

          <Col lg={8} className="padding-custom">
            <Form onSubmit={handleSubmit} className="custom-form">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="Enter First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Enter Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Phone Number</Form.Label>
                    <div className="custom-phone-input-container">
                      <PhoneInput
                        country="in"
                        value={formData.phone}
                        onChange={(phone) =>
                          setFormData((prev) => ({ ...prev, phone }))
                        }
                        inputProps={{
                          name: "phone",
                          required: true,
                          placeholder: "Enter Phone Number",
                        }}
                        enableSearch
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Enter your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 pt-2">
                <Form.Check
                  type="checkbox"
                  id="agreeToTermsCheckbox"
                  name="agreeToTerms"
                  label="I agree with Terms of Use and Privacy Policy"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="custom-checkbox"
                />

                <Button type="submit" className="btn-submit">
                  Send
                </Button>
              </div>
            </Form>
          </Col>
        </Row>

        {/* LOWER ROW: Asked Question Sidebar & FAQ Accordion Section */}
        <Row className="g-0">
          <Col lg={4} className="col-divider-right padding-custom d-flex flex-column justify-content-between">
            <div className="section-header-block secondary-block">
              <img src={Contacticon2} alt="FAQ Section" className="mb-4 brand-icon-secondary" />
              <h2 className="secondary-title">Asked question</h2>
              <p className="secondary-description">
                If the question is not available on our FAQ section, Feel free to
                contact us personally, we will resolve your doubts.
              </p>
              <Button className="btn-ask-question mt-3">
                Ask Question <span className="arrow-icon">↗</span>
              </Button>
            </div>
          </Col>

          <Col lg={8} className="padding-custom d-flex flex-column justify-content-center">
            <Accordion defaultActiveKey="0" className="custom-faq-accordion">
              {faqData.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index} className="mb-3">
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactFAQ;