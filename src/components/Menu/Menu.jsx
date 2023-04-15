import React from "react"
import { Link } from "react-scroll"
import "./Menu.scss"
import { ReactComponent as DownloadIcon } from "./../../Icons/DownloadIcon.svg"
import CV from "../../Data/CV_Laura_Perwenis.pdf"

const Menu = () => {
  const tabs = ["Home", "Projects", "Contact"]
  return (
    <div className="Menu">
      <span>Laura Perwenis</span>
      <nav className="Menu_Navigation">
        {tabs.map((tab) => (
          <Link
            key={tab}
            spy={true}
            smooth={true}
            offset={-120}
            className={`Menu_Navigation_Link Menu_Navigation_${tab}`}
            to={tab}
          >
            {tab}
          </Link>
        ))}
        <a href={CV} target="_blank">
          <button className="Menu_Navigation_CVButton">
            <DownloadIcon />
            CV
          </button>
        </a>
      </nav>
    </div>
  )
}

Menu.propTypes = {}

export default Menu
