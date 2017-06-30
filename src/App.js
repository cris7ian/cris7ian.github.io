import React, { Component } from 'react'

import moment from 'moment'
import Header from './components/Header'
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
          <Header/>
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
