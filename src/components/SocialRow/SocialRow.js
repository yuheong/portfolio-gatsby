import React from "react"
import { Row, Col } from "react-bootstrap"

import "./socialRow.css"

export default () => (
  <Row className="jumbo_social text-center">
    <Col>
      <a
        style={{ color: "#000" }}
        href="https://github.com/yuheong"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github hover_effect" />
      </a>
    </Col>
    <Col>
      <a
        style={{ color: "#000" }}
        href="https://linkedin.com/in/yuheong"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin hover_effect" />
      </a>
    </Col>

    <Col>
      <a
        style={{ color: "#000" }}
        href="https://www.instagram.com/yuhe_o"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram hover_effect" />
      </a>
    </Col>

    {/* <Col>
      <a
        style={{ color: "#000" }}
        href="https://angel.co/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-angellist hover_effect" />
      </a>
    </Col> */}
  </Row>
)
