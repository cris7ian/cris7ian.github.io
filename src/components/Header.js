import React from 'react'
import cristianPP from '../images/cristian.jpg'
import Home from 'react-icons/lib/fa/home'
import Envelope from 'react-icons/lib/fa/envelope-o'
import Phone from 'react-icons/lib/fa/phone'
import Twitter from 'react-icons/lib/fa/twitter'
import Facebook from 'react-icons/lib/fa/facebook'
import Linkedin from 'react-icons/lib/fa/linkedin'
import Github from 'react-icons/lib/fa/github'

const Header = () => (
  <header className="row-fluid">
    <div className="title span7">
      <img
        src={cristianPP}
        width="140"
        height="140"
        className="img-circle profile-pic"
        title="That's me!"
        alt="My Profile"
      />
      <h1>Cristian Caroli</h1>
    </div>
    <div className="social offset1 span4">
      <ul>
        <li><Home /> @ Barcelona, Spain </li>
        <li>
          <Envelope /> cristiancaroli (at) gmail.com
        </li>
        <li><Phone /> +34 669 704 176 </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://twitter.com/cris7ian"
          >
            <Twitter />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://facebook.com/salsaparapizza"
          >
            <Facebook />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://es.linkedin.com/pub/cristian-caroli/28/528/b7/"
          >
            <Linkedin />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/cris7ian"
          >
            <Github />
          </a>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
