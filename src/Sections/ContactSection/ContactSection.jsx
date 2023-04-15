import React from "react"
import { Element } from "react-scroll"
import "./ContactSection.scss"
import { ReactComponent as EnvelopeIcon } from "./../../Icons/EnvelopeIcon.svg"
import { ReactComponent as PhoneIcon } from "./../../Icons/PhoneIcon.svg"

const ContactSection = () => (
  <Element name="Contact" className="ContactSection">
    <h2>Did you like my work?</h2>
    <h4 className="ContactSection_ContactMe">Contact me!</h4>
    <div className="ContactSection_Email">
      <a className="ContactSection_Details" href="mailto:laura.perwenis@gmail.com">
        <EnvelopeIcon />
        laura.perwenis@gmail.com
      </a>
      <a
        className="ContactSection_DetailsButton"
        href="mailto:laura.perwenis@gmail.com"
      >
        <button>Send e-mail</button>
      </a>
    </div>
    <a className="ContactSection_Details" href="tel:+48695139444">
      <PhoneIcon />
      (+48) 695 139 444
    </a>
    <h4 className="ContactSection_LetsBring">
      Let’s bring <span>ideas</span> to life!
    </h4>
  </Element>
)

ContactSection.propTypes = {}

export default ContactSection
