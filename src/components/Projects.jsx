import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import treasures from "../assets/img/treasures.png";
import dings from "../assets/img/Dings.jpg"
import holidaze from "../assets/img/holidaze.png"
import { ArrowReturnRight } from "react-bootstrap-icons";

function Projects() {
  return (
    <section className="projects">
      <Container>
        <h1>Projects</h1>
        <Row className="first">
          <Col>
            <h2>Treasures Auction House</h2>
            <p>
              An auction site is looking to launch a website where users can add
              items to be bid on and bid on items other users have put up for
              auction.
            </p>
            <h4>Created with</h4>
            <p><ArrowReturnRight /> Adobe XD</p>
            <p><ArrowReturnRight /> HTML</p>
            <p><ArrowReturnRight /> CSS</p>
            <p><ArrowReturnRight /> JavaScript</p>
            <p><ArrowReturnRight /> Bootstrap</p>
            <p><ArrowReturnRight /> Sass</p>
          </Col>
          <Col className="col2"><img src={treasures} alt="" /></Col>
        </Row>
        <Row>
          <Col>
            <h2>Dings</h2>
            <p>
              An e-commerce website where customers can create, find and add
              products to the cart.
            </p>
            <h4>Created with</h4>
            <p><ArrowReturnRight /> Figma</p>
            <p><ArrowReturnRight /> HTML</p>
            <p><ArrowReturnRight /> Javascript</p>
            <p><ArrowReturnRight /> Sass</p>
            <p><ArrowReturnRight /> React</p>
            <p><ArrowReturnRight /> React hook form and yup</p>
            <p><ArrowReturnRight /> Styled-Components</p>
            <p><ArrowReturnRight /> Zustand for state management</p>
          </Col>
          <Col className="col2"><img src={dings}  alt="" /></Col>
        </Row>
        <Row>
          <Col>
            <h2>Holidaze</h2>
            <p>
              Holidaze is an accommodation website where you can view, post and
              book specific venues.
            </p>
            <h4>Created with</h4>
            <p><ArrowReturnRight /> Figma</p>
            <p><ArrowReturnRight /> HTML</p>
            <p><ArrowReturnRight /> Javascript</p>
            <p><ArrowReturnRight /> Sass</p>
            <p><ArrowReturnRight /> React</p>
            <p><ArrowReturnRight /> React hook form and yup</p>
            <p><ArrowReturnRight /> Styled-Components</p>
          </Col>
          <Col className="col2"><img src={holidaze}  alt="" /></Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
