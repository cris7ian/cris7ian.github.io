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
                <li><Home/> @ Barcelona, Spain </li>
                <li>
                  <Envelope/> cristiancaroli (at) gmail.com
                </li>
                <li><Phone/> +34 669 704 176 </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://twitter.com/cris7ian"
                  >
                    <Twitter/>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://facebook.com/salsaparapizza"
                  >
                    <Facebook/>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://es.linkedin.com/pub/cristian-caroli/28/528/b7/"
                  >
                    <Linkedin/>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/cris7ian"
                  >
                    <Github/>
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
                I am a creative and project-driven individual. I believe in teamwork and the seamlessly integration of art and technology. I have written books, directed films, designed and developed apps and videogames not because I can’t find my element,
                but because my element is the execution of ideas.
              </p>
              <br />

              <p>Engineer / Game Dev / Filmmaker / Writer</p>
              <br />

              <p>I like pizza, too.</p>
            </div>
          </article>
          <article className="row-fluid">
            <header className="span3">
              <h3>Skills</h3>
            </header>
            <div className="span9 skills-list">
              <div className="row-fluid skills">
                <ul className="span6">
                  <li>
                    <h4>Programming Languages</h4>
                  </li>
                  <li>
                    <strong>JavaScript/Node.js</strong>
                  </li>
                  <li>
                    <strong>Java</strong>
                  </li>
                  <li>
                    <strong>Ruby</strong>
                  </li>
                  <li>
                    <strong>CSS/HTML5</strong>
                  </li>
                </ul>
                <ul className="span6">
                  <li>
                    <h4>Languages</h4>
                  </li>
                  <li>
                    <strong>English</strong> - Fluent
                  </li>
                  <li>
                    <strong>Spanish</strong> - Fluent
                  </li>
                </ul>
              </div>
              <div className="row-fluid skills">
                <ul className="span6">
                  <li>
                    <h4>Game Engines/Frameworks</h4>
                  </li>
                  <li>Unity</li>
                  <li>Flixel</li>
                  <li>Cocos</li>
                  <li>UDK</li>
                  <li>Source Engine</li>
                </ul>
                <ul className="span6">
                  <li>
                    <h4>Databases</h4>
                  </li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>

              <div className="row-fluid skills">
                <ul className="span6">
                  <li>
                    <h4>Collaborative</h4>
                  </li>
                  <li>Scrum</li>
                  <li>Kaban</li>
                  <li>Test Driven Development</li>
                  <li>XP</li>
                  <li>Basecamp</li>
                  <li>Jira</li>
                  <li>Redmine</li>
                  <li>Git and SVN</li>
                </ul>
                <ul className="span6">
                  <li>
                    <h4>Frameworks</h4>
                  </li>
                  <li>Rails</li>
                  <li>Spring Boot</li>
                  <li>Express</li>
                  <li>React</li>
                </ul>
              </div>
              <div className="row-fluid skills">
                <ul className="span6">
                  <li>
                    <h4>Software</h4>
                  </li>
                  <li>After Effects</li>
                  <li>Premiere</li>
                  <li>Photoshop</li>
                </ul>
                <ul className="span6">
                  <li>
                    <h4>Operating Systems</h4>
                  </li>
                  <li>*nix</li>
                  <li>Mac OS</li>
                  <li>Windows</li>
                </ul>
              </div>
            </div>
          </article>
          <article className="row-fluid">
            <header className="span3">
              <h3>Education</h3>
            </header>
            <div className="span9">
              <h4>Master in Cinematographic Direction, ESCAC 2012</h4>
              <h5>2012</h5>

              <p>
                This program gave me the tools to understand story structure, narrative and visual language and apply them to multimedia projects.
              </p>
              <br />

              <h4>
                Bachelor of Engineer in Computer Science in Universidad Simón Bolívar
              </h4>
              <h5>2004-2009</h5>

              <p>
                Mention: Cum Laude. GPA: 4.28 / 5 I specialized in Artificial Intelligence, Computer Graphics and UIX. Universidad Simón Bolívar is one of the most prestigious technical universities in Latin America.
              </p>
              <br />
            </div>
          </article>
          <article className="row-fluid">
            <header className="span3">
              <h3>Awards</h3>
            </header>
            <div className="span9">
              <h4>One of the top posts on Tumblr in tech during 2013</h4>
              <h5>2013</h5>
              <p>
                Project manager and developer in the project Mcalc, an app that enables individuals all across the gender spectrum to track their menstruation cycle. We were featured in
                {' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://yearinreview.tumblr.com/post/68815141660/sexmind-mcalc-the-first-gender-neutral"
                >
                  A Year in Review
                </a>
                {' '}
                and the
                {' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.huffingtonpost.com/2013/10/23/mcalc-gender-neutral-menstruation_n_4149052.html"
                >
                  Huffington Post
                </a>
                .
              </p>
              <br />

              <h4>Best Webapp in Paypal Battle Hack Barcelona</h4>
              <h5>2013</h5>
              <p>
                Took the role of product owner in a pay-what-you-want marketplace for secondhand with Paypal integration under 24 hours.
              </p>
              <br />

              <h4>4th Place 1st Vueling Hackathon</h4>
              <h5>2013</h5>
              <p>
                Took the role of product owner in a group oriented booking engine with Phonegap under 18 hours.
              </p>
              <br />
            </div>
          </article>
          <article className="row-fluid">
            <header className="span3">
              <h3>Certifications</h3>
            </header>
            <div className="span9">
              <ul>
                <li>
                  Fantasy and Science Fiction: Our Human Mind, Our Modern World. University of Michigan.
                </li>
                <li>
                  Online Games: Literature, New Media and Narrative. vanderbilt University.
                </li>
                <li>
                  Video Games and Learning. University of Wisconsin-Madison
                </li>
                <li>Adobe Flash CS3 Instructor, Adobe.</li>
                <li>After Effects CS3 Certified Instructor, Adobe.</li>
                <li>Code School, all the medals.</li>
              </ul>
            </div>
          </article>
          <article className="row-fluid">
            <header className="span3">
              <h3>Work Experience</h3>
            </header>
            <div className="span9">
              <h4>Senior Consultant @ ThoughtWorks</h4>
              <h5>january 2017 - current</h5>

              <p>
                My mission is to better humanity through software and help drive the creation of a socially and economically just world.
              </p>
              <br />
              <h4>Head of Product Design @ Chalk</h4>
              <h5>august 2015 - january 2017</h5>

              <p>
                I'm of the founders of Chalk. Our goal is to make the best Daily Fantasy Sports site in the world. I'm in charge of the product conception and part of the development team as well as overseeing the art direction and brand identity of the company.
              </p>
              <br />
              <h4>API Solutions Engineer @ 3scale</h4>
              <h5>may 2015 - august 2015</h5>

              <p>
                My role is to ensure the success of our customers as they
                deploy 3scale's platform.
                I drive implementation projects covering a wide
                variety of API architectures for high-profile launches.
              </p>
              <p>
                I operate
                on many levels: from high level architecture conceptualization,
                through coding implementation, together with project management, training and product support.
              </p>
              <br />
              <h4>Game Developer @ Akamon Entertainment</h4>
              <h5>may 2013 - may 2015</h5>

              <p>
                Frontend and Backend developer of Social Games for a platform of over 11 million users. Projects developed using Java, AS3/Flash, MySQL, Ruby and lovely Node.js.
              </p>
              <br />

              <h4>Project Manager @ Witbooking</h4>
              <h5>october 2012 - may 2013</h5>

              <p>
                Project manager and lead developer. Started a powerful transition from an outdated model and platform to state of the art technology and methodologies.
              </p>
              <br />

              <h4>Game Developer @ DoubleYou Barcelona</h4>
              <h5>jul 2012 - oct 2012</h5>

              <p>
                Outsourced for a single project. It was a Christmas microsite with a Flash videogame and made use of the Youtube API and a wide range of technical tools.
              </p>
              <br />

              <h4>QA and Tester @ Digital Legends</h4>
              <h5>jan 2012 - jul 2012</h5>

              <p>
                QA and testing for the iOS and Android game
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://itunes.apple.com/ca/app/respawnables/id575684686"
                >
                  Respawnables
                </a>
                . Part-time job during my film studies.
              </p>
              <br />

              <h4>Senior Frontend Engineer @ GMT Prime</h4>
              <h5>jun 2011 - dec 2011</h5>
              <p>
                Real time data visualization in web applications. Used GRAILS to create the entire front end of a FOREX trading system.
              </p>
              <br />

              <h4>Freelance Game Designer and Developer @ Planet Earth</h4>
              <h5>2008-End of Times</h5>
              <p>
                Always on the hunt for new exiting projects. Mostly UIX consulting, web solutions, mobile apps and a wide variety of advergames for the web, mobile alongside talented artists and creative minds.
              </p>
              <br />

              <h4>Creative Director / Founder @ Powerdot</h4>
              <h5>2008 - 2011</h5>
              <p>
                An IT and creative solutions company I started with several colleagues. We worked with high profile creative and advertisement agencies as Leo Burnett, Kellogg’s, and Wikot providing creative and technological solutions in social media
                and advergames.
              </p>
              <br />

              <h4>
                Flash and After Effects Instructor @ ARTS Computer Graphics Institute
              </h4>
              <h5>2008 - 2012</h5>
              <p>
                Instructor in one of the most recognized Venezuela's CGI institutes. Taught over 1000 hour of Adobe Software.
              </p>
              <br />
            </div>
          </article>
          <article className="row-fluid">
            <header className="span3">
              <h3>Memberships</h3>
            </header>
            <div className="span9">
              <ul>
                <li>Siggraph Student Volunteer.</li>
                <li>Member of the Artificial Intelligence Group.</li>
                <li>Computer Science Student’s Center (CEIC) USB</li>
                <li>JOINCIC Founder and Head of Image and Advertisement.</li>
                <li>Global Game Jam 2011. Co-Host and Game Designer.</li>
              </ul>
            </div>
          </article>
          <article className="row-fluid">
            <header className="span3">
              <h3>Thesis Research Topic</h3>
            </header>
            <div className="span9">
              <h5>sept 2008 - sept 2009</h5>
              <p>
                The research work for my bachelor degree consists of the development of an adaptive videogame environment that adjusts based on the user temperance.
              </p>
              <br />
              <p>
                The videogame turns more violent when the user tends to apply a more violent strategy. In the same manner, the videogame adjusts to passive player moves by reducing the level of dynamism and violence. At the end the different type of users are questioned
                to determine if this adaptive strategy makes the game more appealing to their preference. The project obtained an Exceptionally Good Mention.
              </p>
            </div>
          </article>
          <article className="row-fluid">
            <header className="span3">
              <h3>Speaker</h3>
            </header>
            <div className="span9">
              <ul>
                <li>
                  <b>Gamexpo, Caracas 2009</b>, Chester: Adaptive Storytelling.
                </li>
                <li>
                  <b>JOINCIC, Caracas 2009</b>
                  , Intelligent Environments for Videogames.
                </li>
              </ul>
            </div>
          </article>
          <article className="row-fluid">
            <header className="span3">
              <h3>Short Films</h3>
            </header>
            <div className="span9">
              <ul>
                <li>
                  <b>RNR’ Romeo</b>; writer, director and editor
                  <br />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://vimeo.com/43716339"
                  >
                    full film
                  </a>
                  .
                </li>
                <li>
                  <b>First Class</b>; editor and VFX
                  <br /><a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://vimeo.com/41487542"
                  >
                    full
                    film
                  </a> password: Cervezatostada.
                </li>
                <li>
                  <b>Quiero</b>; assistant director
                  <br />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://vimeo.com/43299265"
                  >
                    full film
                  </a>
                  {' '}
                  password: quieroquiero.
                </li>
                <li>
                  <b>Una Hora, Un Paso</b>; assistant director, producer.
                  <br />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://vimeo.com/68640760"
                  >
                    trailer
                  </a>
                </li>
                <li>among others</li>
              </ul>
            </div>
          </article>
          <article className="row-fluid">
            <header className="span3">
              <h3>Areas of Interests</h3>
            </header>
            <div className="span9">
              <ul>
                <li>Game Design.</li>
                <li>Storytelling.</li>
                <li>Interactive Narrative.</li>
                <li>Artificial Intelligence.</li>
                <li>Computer Graphics.</li>
                <li>UIX.</li>
              </ul>
            </div>
          </article>
          <article className="row-fluid">
            <header className="span3">
              <h3>Personal Interests</h3>
            </header>
            <div className="span9">
              <h4>Film production and performing arts</h4>
              <p>
                I have worked in different multimedia projects that have taken me to Film Festivals in Sitges, San Sebastián and all over Latin America.
              </p>
              <br />

              <h4>Writing</h4>
              <p>
                I am a published author of short stories and I’m currently writing an action novel and a steampunk oddisey.
              </p>
              <br />
              <p>
                You can buy my book
                {' '}
                <i>Bajo la Sombra de los Elefantes</i>
                {' '}
                <a href="http://www.amazon.com/Bajo-Sombra-Los-Elefantes-Spanish/dp/1511523093/ref=sr_1_1?ie=UTF8&qid=1432376873&sr=8-1&keywords=bajo+la+sombra+de+los+elefantes">
                  in Amazon
                </a>
                .
              </p>
              <br />
              <p>
                Also, I have my own storytelling blog
                {' '}
                <a
                  href="http://www.invisiblebridg.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Invisible Bridges
                </a>
              </p>
              <br />
              <h4>Open water diver, certified IANTD diver</h4>
              <p>Gotta love fish, water and all that stuff.</p>
              <br />
            </div>
          </article>
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
