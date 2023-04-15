import React from "react"
import { Element } from "react-scroll"
import "./ProjectsSection.scss"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import projectsList from "../../Data/projectsList.js"

const ProjectsSection = () => (
  <Element name="Projects" className="ProjectsSection">
    <h2>My projects</h2>
    {projectsList.map((project, i) => (
      <ProjectCard
        key={i}
        title={project.title}
        description={project.description}
        screenshots={project.screenshot}
        twoVersions={project.twoVersions}
        caseStudies={project.caseStudies}
        figmaLinks={project.figmaLinks}
      />
    ))}
  </Element>
)

ProjectsSection.propTypes = {}

export default ProjectsSection
