import React from "react"
import { Row, Col } from "react-bootstrap"

import "./projectCard.css"
import MyButton from "../myButton/MyButton"

//Props:
//imageSrcPath: the path to the image used
//title: The title of the card/App
//date: The date of the card
//description: Short description of the card
//sourceURL: URL to the source code of the project
//hostedURL: URL to the hosted version of the app

const ProjectCard = props => {
  return (
    <div className="project_container">
      <Row>
        <Col className="justify-content-center" style={{ display: "flex" }}>
          <img
            src={props.imageSrcPath}
            alt={"Smiley face"}
            style={{ maxWidth: "100%", maxHeight: "600px" }}
          />
        </Col>
        <Col>
          <h4>
            {props.title}
            <br />
            <small>{props.date}</small>
          </h4>

          <p align="justify">{props.description}</p>

          <Row>
            <MyButton text={"Source Code"} URL={props.sourceURL} />
            {props.hostedURL && (
              <MyButton text={"Hosted App"} URL={props.hostedURL} />
            )}
            {props.linkURL && (
              <MyButton text={"Link"} URL={props.linkURL} />
            )}
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ProjectCard
