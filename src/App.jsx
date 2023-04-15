import React from "react"
import HomeSection from "./Sections/HomeSection/HomeSection"
import Menu from "./components/Menu/Menu"
import ProjectsSection from "./Sections/ProjectSection/ProjectsSection"
import ContactSection from "./Sections/ContactSection/ContactSection"
import "./App.scss"

const App = () => {
  return (
    <div className="App">
      <div className="App_ConfettiBar" />
      <div className="App_Body">
        <Menu />
        <div className="App_Body_Content">
          <HomeSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </div>
  )
}

export default App
