import React from "react"
import Layout from "../components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import MyJumbo from "../components/myJumbo/MyJumbo"
import ProjectCard from "../components/portProjectCard/ProjectCard"

import "./index.css"

import adhoccer from "../images/portfolio/adhoccer.png"
import hero_app from "../images/portfolio/hero-app.jpeg"
import gokartyourself from "../images/portfolio/gokartyourself.png"

/*######### PROJECT OBJECTS TEMPLATE################
import projectPicture from ""
const projectProject = {
  title: "",
  date: "",
  decription: "",
  sourceURL: "",
  hostedURL: "",
}
#####################################################
*/
const projects = [
  {
    image: adhoccer,
    title: "MERN Job Listing Platform",
    date: "October 2020",
    decription:
      "An adhoc jobs creation platform built in MERN (MongoDB, Express, React, Node) with simple CRUD-based APIs as well as basic CI/CD with unit testing.",
    sourceURL: "https://github.com/yuheong/mern-adhoccer",
    hostedURL: "https://adhoccer.netlify.app/",
  },
  {
    image: hero_app,
    title: "HERO Deploy",
    date: "January 2020",
    decription:
      "HERO Deploy is a platform that my team and I built to empower community members to assist in emergencies, such as providing CPR to nearby casualties. Emergency services can dispatch the nearest community responder through this app to assist with the victim. Our team created this platform for our UofTHacks VII Hackathon, which won the first prize. I created the application interface in React Native, and integrated the backend APIs developed by my other team members.",
    sourceURL: "https://github.com/uofthacksvii-heroes/hero-deploy",
    linkURL: "https://devpost.com/software/hero-10ozi8",
  },
  {
    image: gokartyourself,
    title: "GoKartYourself",
    date: "June - August 2020",
    decription:
      "GoKartYourself is a 3D multiplayer racing game that was inspired by Mario Kart. It was developed using the Unity Game Engine and incorporated various features such as real time multiplayer and persistence of high scores and player settings.",
    sourceURL: "https://github.com/",
  },
]

export default () => (
  <div className="App">
    <Layout>
      <MyJumbo
        title={"Projects Portfolio"}
        body={
          "I love building stuff and here are some of my personal and school-based projects."
        }
      />
      <hr />

      <Container style={{ marginTop: "2.5rem" }}>
        {projects.map((project, index) => (
          <Row>
            <Col>
              <ProjectCard
                imageSrcPath={project.image}
                title={project.title}
                date={project.date}
                description={project.decription}
                sourceURL={project.sourceURL}
                linkURL={project.linkURL}
                hostedURL={project.hostedURL}
              />
            </Col>
          </Row>
        ))}
      </Container>
    </Layout>
  </div>
)
