import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import me from "../assets/img/me.jpg";

function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={7} md={5} xl={4} className="d-flex justify-content-center">
            <img className="me" src={me} alt="Karla Mae Rabe" />
          </Col>
          <Col xs={12} md={6} xl={7}>
            <div className="bannerItem">
              <p>Hi, welcome to my portfolio</p>
              <h1 className="tagline">My name is Karla Mae Rabe</h1>
              <h2 className="tagline">And I'm a Frontend Developer student</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
