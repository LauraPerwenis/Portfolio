import React from "react"
import "./ProjectCard.scss"
import PropTypes from "prop-types"
import { ReactComponent as FigmaIcon } from "./../../Icons/FigmaIcon.svg"
import { Dropdown } from "antd"

const ProjectCard = ({
  title,
  description,
  screenshots,
  twoVersions,
  caseStudies,
  figmaLinks,
}) => (
  <div className="ProjectCard">
    <div className="ProjectCard_Header">
      <div>
        <h3>{title}</h3>
        <span className="ProjectCard_Header_Description">
          <span className="ProjectCard_Header_Description--decorated">
            {description.decorated}
          </span>
          {description.common}
        </span>
      </div>
      <div className="ProjectCard_Header_Buttons">
        {twoVersions ? (
          <>
            <Dropdown
              className="CaseStudyDropdownButton"
              dropdownRender={() => (
                <div className="CaseStudyDropdownButton_Dropdown">
                  <a href={caseStudies.desktop} target="_blank">
                    Desktop version
                  </a>
                  <a href={caseStudies.mobile} target="_blank">
                    Mobile version
                  </a>
                </div>
              )}
              placement="bottom"
            >
              <button>Show case study</button>
            </Dropdown>
            <Dropdown
              className="FigmaDropdownButton"
              dropdownRender={() => (
                <div className="FigmaDropdownButton_Dropdown">
                  <a href={figmaLinks.desktop} target="_blank">
                    Desktop version
                  </a>
                  <a href={figmaLinks.mobile} target="_blank">
                    Mobile version
                  </a>
                </div>
              )}
              placement="bottom"
            >
              <button>
                <FigmaIcon /> See in Figma
              </button>
            </Dropdown>
          </>
        ) : (
          <>
            <a href={caseStudies.desktop || caseStudies.mobile} target="_blank">
              <button className="ProjectCard_Header_Buttons_CaseStudyButton">
                Show case study
              </button>
            </a>
            <a href={figmaLinks.desktop || figmaLinks.mobile} target="_blank">
              <button className="ProjectCard_Header_Buttons_FigmaButton">
                <FigmaIcon /> See in Figma
              </button>
            </a>
          </>
        )}
      </div>
    </div>
    <div className="ProjectCard_Screanshots">
      <img src={screenshots} alt="screenshots" />
    </div>
  </div>
)

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.shape({
    decorated: PropTypes.string,
    common: PropTypes.string,
  }).isRequired,
  screenshots: PropTypes.any.isRequired,
  twoVersions: PropTypes.bool.isRequired,
  caseStudies: PropTypes.shape({
    desktop: PropTypes.any,
    mobile: PropTypes.any,
  }).isRequired,
  figmaLinks: PropTypes.shape({
    desktop: PropTypes.string,
    mobile: PropTypes.string,
  }).isRequired,
}

export default ProjectCard
