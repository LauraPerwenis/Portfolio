import React from "react"
import { Link } from "react-scroll"
import "./Menu.scss"
import { ReactComponent as DownloadIcon } from "./../../Icons/DownloadIcon.svg"
import CV_ENG from "../../Data/CV_Laura_Stachelek_ENG.pdf"
import CV_PL from "../../Data/CV_Laura_Stachelek_PL.pdf"
import { Dropdown } from "antd"

const Menu = () => {
  const tabs = ["Home", "Projects", "Contact"]
  return (
    <div className="Menu">
      <span>Laura Stachelek</span>
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
        <Dropdown
          className="CVDropdownButton"
          dropdownRender={() => (
            <div className="CVDropdownButton_Dropdown">
              <a href={CV_ENG} target="_blank">
                ENG
              </a>
              <a href={CV_PL} target="_blank">
                PL
              </a>
            </div>
          )}
          placement="bottom"
        >
          <button className="Menu_Navigation_CVButton">
            <DownloadIcon />
            CV
          </button>
        </Dropdown>
      </nav>
    </div>
  )
}

Menu.propTypes = {}

export default Menu
