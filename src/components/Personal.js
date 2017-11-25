import React from 'react'

const Personal = () => (
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
      <p>Also managed to combine both my passions (programming and film) with my node package <a rel="noopener noreferrer" href="https://twitter.com/cris7ian/status/932884799685103616" target="_blank">moviematch</a>.</p>
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
        <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/Bajo-Sombra-Los-Elefantes-Spanish/dp/1511523093/ref=sr_1_1?ie=UTF8&qid=1432376873&sr=8-1&keywords=bajo+la+sombra+de+los+elefantes">
          in Amazon
        </a>
        .
      </p>
      <br />
      <p>
        Read some funny stuff I post online in <a target="_blank" rel="noopener noreferrer" href="http://www.firstdraftendings.com/">First Draft Endings</a>.
      </p>
      <br />
      <p>
        I also made a Venezuelan adaptation of Cards Against Humanity called <a target="_blank" rel="noopener noreferrer" href="http://www.caracasagainsthumanity.com/" >Caracas Against Humanity</a>.
      </p>
      <br />
      <p>
        Also, I have my own storytelling blog
        {' '}
        <a
          href="https://medium.com/invisible-bridges"
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
)

export default Personal
