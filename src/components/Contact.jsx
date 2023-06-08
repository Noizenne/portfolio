import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { EnvelopeFill } from "react-bootstrap-icons";

function Contact() {
  return (
    <section className="contact">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col>
            <h1>Get in touch with me!</h1>
          </Col>
          <Col className="d-flex justify-content-around">
            <a href="https://github.com/Noizenne">
              <Github style={{ fontSize: "3em", color: "rgb(174, 0, 255)" }} />
            </a>
            <a href="https://www.linkedin.com/in/karla-mae-rabe-71b1351b5/">
              <Linkedin
                style={{ fontSize: "3em", color: "rgb(174, 0, 255)" }}
              />
            </a>
            <div className="d-flex flex-column align-items-center">
              <EnvelopeFill
                style={{ fontSize: "3em", color: "rgb(174, 0, 255)" }}
              />
              <p>karlamae2405@gmail.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
