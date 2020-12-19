import React from "react"

import { Container, Jumbotron, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

import "./footer.css"
import "../../fontawesome/css/all.min.css"

const Footer = () => (
  <Jumbotron fluid style={footer_styles}>
    <Container style={{ maxWidth: "960px" }}>
      <Row>
        <Col>
          <h3>Yu-He Ong</h3>
          <p style={{ color: "blueviolet", fontSize: "1.3rem" }}>
            <a href="mailto:yuhe.ong@gmail.com">
              <span style={{ color: "blueviolet" }}>yuhe.ong@gmail.com</span>
            </a>
          </p>
          <br />
          <p style={{ fontSize: "1.3rem" }}>
            I'm a young and curious developer that loves to code. I look forward
            to building new and great products!
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            textDecoration: "underline",
            fontSize: "1.4rem",
            marginBottom: "1rem",
            marginTop: "2rem",
          }}
        >
          Menu
        </Col>
      </Row>
      <Row>
        <Col xs={2} style={{ fontSize: "1.3rem" }}>
          <Link to="/">
            <span className="link_styles">Home</span>
          </Link>
        </Col>
        <Col xs={2} style={{ fontSize: "1.3rem" }}>
          <Link to="/about">
            <span className="link_styles">About</span>
          </Link>
        </Col>
        <Col xs={2} style={{ fontSize: "1.3rem" }}>
          <Link to="/projects">
            <span className="link_styles">Projects</span>
          </Link>
        </Col>
      </Row>

      {/* TODO: Make use of the SocialRow component to make the below icons obsolete */}

      <Row className="footer_social text-center">
        <Col>
          <a
            href="https://github.com/yuheong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github hover_effect" />
          </a>
        </Col>
        <Col>
          <a
            href="https://linkedin.com/in/yuheong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin hover_effect" />
          </a>
        </Col>

        <Col>
          <a
            href="https://www.instagram.com/yuhe_o"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram hover_effect" />
          </a>
        </Col>

        {/* <Col>
          <a href="https://angel.co/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-angellist hover_effect" />
          </a>
        </Col> */}
      </Row>
      <Row className="text-center" style={{ marginTop: "3rem" }}>
        <Col>
          Ong Yu-He © {new Date().getFullYear()}, Built with
          <i
            className="fas fa-heart"
            style={{
              marginLeft: "10px",
              marginRight: "3px",
              fontSize: "1rem",
            }}
          />
          <a href="https://www.gatsbyjs.org">
            {" "}
            <span className="blueViolet">& Gatsby</span>
          </a>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

const footer_styles = {
  marginTop: "3rem",
  marginBottom: "0",
  backgroundColor: "#000",
  color: "#fff",
  paddingBottom: "0",
  width: "100%",
}

export default Footer
