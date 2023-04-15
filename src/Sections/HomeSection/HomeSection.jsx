import React from "react"
import { Element } from "react-scroll"
import "./HomeSection.scss"
import profile_image from "../../Images/ProfileImage.jpg"

const HomeSection = () => (
  <Element name="Home" className="HomeSection">
    <div className="HomeSection_WelcomeSection">
      <h1 className="HomeSection_WelcomeSection_Hi">
        Hi, I'm <span>Laura</span>
      </h1>
      <h4>A UI/UX Designer based in Poland</h4>
      <span>
        I'm passionate about creating <span className="blue">aesthetic</span>{" "}
        projects that make people's lives
        <span className="blue"> easier</span>
      </span>
    </div>
    <div className="HomeSection_Image">
      <img src={profile_image} alt="Profile Image" width="400" height="600" />
    </div>
  </Element>
)

HomeSection.propTypes = {}

export default HomeSection
