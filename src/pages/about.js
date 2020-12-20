import React from "react"
import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import MyButton from "../components/myButton/MyButton"

import "../fontawesome/css/all.min.css"
import "./index.css"

import { Container, Row, Col } from "react-bootstrap"

export default () => (
  <div className="App">
    <Layout>
      <MyJumbo
        title={"More about me."}
        body={
          "I'm a Computer Science student with an interest in Software Development and all things tech - from the latest gadgets to applications of technology to improve lives around the world."
        }
        body2={
          "During my free time, I love to play games, play sports, travel (eventually...) and hang out with friends."
        }
      />
      <hr />
      <Container fluid>
        <Row style={{ marginTop: "2rem", marginBottom: "1.5rem" }}>
          <MyButton
            text={"CV download"}
            URL={
              "https://drive.google.com/file/d/1OCTO5Ro34zaZzXsPpzvmD9jMIyxdZLEZ/view?usp=sharing"
            }
          />
          <MyButton
            text={"Freelance Portfolio"}
            URL={"https://tinyurl.com/yuhe-portfolio"}
          />
        </Row>
        <hr />
        <Row>
          <Col>
            <h3>Past work experience</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Software Engineer Intern</h5>
          </Col>
        </Row>
        <Row>
          <Col>Blockthrough, Toronto, Canada</Col>
          <Col>August 2019 - July 2020</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              Enhanced and maintaining the company’s core ad-technology platform
              built in NodeJS and vanilla JavaScript, and implemented custom
              JavaScript logic on publisher websites to deliver Acceptable Ads
              to adblock users. Also worked on integrating a new publisher
              dashboard built with ReactJS and Golang.
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h5>Software Product Manager Intern</h5>
          </Col>
        </Row>
        <Row>
          <Col>Savant Degrees Private Limited, Singapore</Col>
          <Col>June 2019 - July 2019</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              Involved in digital innovation projects for a diverse group of
              clients, by contributing to various processes such as gathering
              business requirements, software development and user acceptance
              testing.
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h5>Freelance App Developer</h5>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>January 2017 - June 2019</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              Worked on various freelance projects for various clients by
              creating mobile applications and games for event management
              companies such as Eventas Asia.
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
          <Col>August 2017 - May 2021</Col>
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
            <h5>NUS Overseas Colleges (Toronto)</h5>
          </Col>
        </Row>
        <Row>
          <Col>University of Toronto, Canada</Col>
          <Col>August 2019 - July 2020</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              <strong>Courses taken:</strong>
              <br /> The Business of Software, Patent Analytics
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
          <Col>January 2013 - December 2014</Col>
        </Row>
      </Container>
    </Layout>
  </div>
)
