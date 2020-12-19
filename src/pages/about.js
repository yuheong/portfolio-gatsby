import React from "react"
import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import MyButton from "../components/myButton/MyButton"

import "../fontawesome/css/all.min.css"
import "./index.css"

import { Container, Row, Col } from "react-bootstrap"

import CV from "/" //Import you CV file here!
import other from "/" //Import other downloadable here

export default () => (
  <div className="App">
    <Layout>
      <MyJumbo
        body={
          "So you are looking for a professional, communicative & punctual software engineer who likes to keep productive."
        }
        body2={"I can also do this cool thing if that's... needed."}
        title={"More about me."}
      />
      <hr />
      <Container fluid>
        <Row style={{ marginTop: "2rem", marginBottom: "1.5rem" }}>
          {/* <MyButton text={"CV download"} URL={"https://abcd"} /> */}
          {/* <MyButton text={"Other Downloadable"} URL={other} /> */}
        </Row>
        <Row>
          <Col>
            <h3>Summary</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <h5>I love Coffee. I mean, more than people normaly like coffee</h5> */}
            <br />
            <p>
              I'm a Computer Science student with an interest in Software
              Development and all things tech - from the latest gadgets to
              applications of technology to improve lives around the world.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              pariatur nobis ipsa laborum quae, fuga vel a, dolor consectetur
              blanditiis explicabo dolorem quos sunt voluptatibus dicta commodi
              temporibus magnam placeat.
            </p>
          </Col>
        </Row>
        <hr />
        {/* This is the beginning of the career section*/}
        <Row>
          <Col>
            <h3>Past work experience</h3>
          </Col>
        </Row>
        {/* Position number 1*/}
        <Row>
          <Col>
            <h5>Software Engineer Intern</h5>
          </Col>
        </Row>
        <Row>
          <Col>Blockthrough, Toronto, Canada</Col>
          <Col>2019.08 - 2020.07</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et iure
              nisi consequuntur provident officia odio vitae, nam neque natus
              debitis earum facere, quibusdam similique itaque sed, cumque
              aliquam voluptas quos.
            </p>
          </Col>
        </Row>
        <hr />
        {/* SW intern Position*/}
        <Row>
          <Col>
            <h5>Software Product Manager Intern</h5>
          </Col>
        </Row>
        <Row>
          <Col>Savant Degrees Private Limited, Singapore</Col>
          <Col>2019.06 - 2019.07</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              ullam eius nihil porro itaque nobis facere. Impedit eos minima
              porro. Culpa, laboriosam! Qui quo provident aperiam et ullam odio
              ex.
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h3>Education</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Bachelor of Computing (Honours) in Computer Science</h5>
          </Col>
        </Row>
        <Row>
          <Col>National University of Singapore, Singapore</Col>
          <Col>2017.08 - 2021.05</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              <strong>Specialization:</strong>
              <br /> Software Engineering and Databases
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>GCE 'A' Levels</h5>
          </Col>
        </Row>
        <Row>
          <Col>Nanyang Junior College, Singapore</Col>
          <Col>2013.01 - 2014.12</Col>
        </Row>
      </Container>
    </Layout>
  </div>
)
