import React from 'react'

const Films = () => (
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
          </a> password: CervezaTostada.
        </li>
        <li>
          <b>Quiero</b>; assistant director
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.escac.es/es/films/2014/quiero"
          >
            full film
          </a>
        </li>
        <li>
          <b>Una Hora, Un Paso</b>; assistant director, producer.
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.kimuak.com/es/corto/2013/una-hora-un-paso"
          >
            full film
          </a>
        </li>
        <li>among others</li>
      </ul>
    </div>
  </article>
)

export default Films
