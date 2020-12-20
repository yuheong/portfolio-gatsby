import React from "react"
import { Jumbotron } from "react-bootstrap"

//import custom styles
import "./hero.css"
import SocialRow from "../SocialRow/SocialRow"

const Hero = () => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <h1>Hey, I'm Yu-He, a Software Developer from Singapore.</h1>
      <br />
      <h3>
        Currently I'm in my final year of studies as a Computer Science
        undergraduate at the National University of Singapore.
      </h3>
      <p>
        Contact me at{" "}
        <a href="mailto:yuhe.ong@gmail.com">
          <span style={{ color: "blueviolet" }}>yuhe.ong@gmail.com</span>
        </a>
      </p>
    </div>
    <div>
      <SocialRow />
    </div>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
}

export default Hero
