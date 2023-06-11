import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import treasures from "../assets/img/treasures.png";
import dings from "../assets/img/Dings.jpg";
import holidaze from "../assets/img/holidaze.png";
import { ArrowReturnRight } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import { BoxArrowInUpRight } from "react-bootstrap-icons";

function Projects() {

  const border = {
    transition: "0.3s ease-in-out",
    border: "1px solid rgb(174, 0, 255)",
  };

  return (
    <section className="projects mt-5" id="projects">
      <Container>
        <h1>Projects</h1>
        <Row className="first mt-auto pt-3">
          <Col onScroll={border}>
            <h2>Treasures Auction House</h2>
            <p>
              An auction site is looking to launch a website where users can add
              items to be bid on and bid on items other users have put up for
              auction.
            </p>
            <h4>Created with</h4>
            <p>
              <ArrowReturnRight /> Adobe XD
            </p>
            <p>
              <ArrowReturnRight /> HTML
            </p>
            <p>
              <ArrowReturnRight /> CSS
            </p>
            <p>
              <ArrowReturnRight /> JavaScript
            </p>
            <p>
              <ArrowReturnRight /> Bootstrap
            </p>
            <p>
              <ArrowReturnRight /> Sass
            </p>
            <div className="d-flex">
              <a
                href="https://github.com/Noizenne/Karla-Mae-Rabe_Semester-Project-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="p-2 m-1">
                  <Github /> View Repo
                </button>
              </a>
              <a
                href="https://tiny-shortbread-a05c58.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <button className="p-2 m-1">
                <BoxArrowInUpRight />
                View Project
              </button>
              </a>
            </div>
          </Col>
          <Col className="col2 mt-1 mb-1">
            <img src={treasures} alt="Treasures" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Dings</h2>
            <p>
              An e-commerce website where customers can create, find and add
              products to the cart.
            </p>
            <h4>Created with</h4>
            <p>
              <ArrowReturnRight /> Figma
            </p>
            <p>
              <ArrowReturnRight /> HTML
            </p>
            <p>
              <ArrowReturnRight /> Javascript
            </p>
            <p>
              <ArrowReturnRight /> Sass
            </p>
            <p>
              <ArrowReturnRight /> React
            </p>
            <p>
              <ArrowReturnRight /> React hook form and yup
            </p>
            <p>
              <ArrowReturnRight /> Styled-Components
            </p>
            <p>
              <ArrowReturnRight /> Zustand for state management
            </p>
            <div className="d-flex">
              <a
                href="https://github.com/Noizenne/js-frameworks"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="p-2 m-1">
                  <Github /> View Repo
                </button>
              </a>
              <a
                href="https://effulgent-kleicha-83c848.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <button className="p-2 m-1">
                <BoxArrowInUpRight />
                View Project
              </button>
              </a>
            </div>
          </Col>
          <Col className="col2 mt-1 mb-1">
            <img src={dings} alt="Dings" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Holidaze</h2>
            <p>
              Holidaze is an accommodation website where you can view, post and
              book specific venues.
            </p>
            <h4>Created with</h4>
            <p>
              <ArrowReturnRight /> Figma
            </p>
            <p>
              <ArrowReturnRight /> HTML
            </p>
            <p>
              <ArrowReturnRight /> Javascript
            </p>
            <p>
              <ArrowReturnRight /> Sass
            </p>
            <p>
              <ArrowReturnRight /> React
            </p>
            <p>
              <ArrowReturnRight /> React hook form and yup
            </p>
            <p>
              <ArrowReturnRight /> Styled-Components
            </p>
            <div className="d-flex">
              <a
                href="https://github.com/Noizenne/pe2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="p-2 m-1">
                  <Github /> View Repo
                </button>
              </a>
              <a
                href="https://amazing-centaur-0545da.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <button className="p-2 m-1">
                <BoxArrowInUpRight />
                View Project
              </button>
              </a>
            </div>
          </Col>
          <Col className="col2 mt-1 mb-1">
            <img src={holidaze} alt="Holidaze" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
