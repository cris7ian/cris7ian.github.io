import React, { Component } from 'react'
import cristianPP from './images/cristian.jpg'
import Home from 'react-icons/lib/fa/home'
import Envelope from 'react-icons/lib/fa/envelope-o'
import Phone from 'react-icons/lib/fa/phone'
import Twitter from 'react-icons/lib/fa/twitter'
import Facebook from 'react-icons/lib/fa/facebook'
import Linkedin from 'react-icons/lib/fa/linkedin'
import Github from 'react-icons/lib/fa/github'
import moment from 'moment'
import Education from './components/Education'
import Skills from './components/Skills'
import Awards from './components/Awards'
import Certifications from './components/Certifications'
import Work from './components/Work'
import Memberships from './components/Memberships'
import Thesis from './components/Thesis'
import Speaker from './components/Speaker'
import Films from './components/Films'
import Interests from './components/Interests'
import Personal from './components/Personal'
import './bs.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="container">
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
          <article className="row-fluid">
            <header className="span3" />
            <div className="span9 ">
              <p className="welcome">
                "Imagination will often carry us to worlds that never were. But without it we go nowhere."
                <br />
              </p>
              <p className="auth"><i>-Carl Sagan</i></p>
            </div>
          </article>
          <article className="row-fluid">
            <header className="span3">
              <h3>About me</h3>
            </header>
            <div className="span9">
              <p>
                I am a creative and project-driven individual. I believe in teamwork and the seamless integration of art and technology. I have written books, directed films, designed and developed apps and videogames not because I can’t find my element,
                but because my element is the execution of ideas.
              </p>
              <br />

              <p>Engineer / Game Dev / Filmmaker / Writer</p>
              <br />

              <p>I like pizza, too.</p>
            </div>
          </article>
          <Skills />
          <Work />
          <Awards />
          <Education />
          <Thesis />
          <Certifications />
          <Memberships />
          <Speaker />
          <Films />
          <Interests />
          <Personal />
          <footer className="no-print">
            © {moment().format('YYYY')} Cristian E. Caroli |
            <a onClick={() => window.print()}>Print</a>
          </footer>
        </section>
      </div>
    )
  }
}

export default App
