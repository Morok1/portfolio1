import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '120%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <hr/>
              <hr/>
              <h1>Full Stack Web Developer</h1>

          <p>Java | Spring | React JS | Python | Kotlin| Postgres | Docker | AWS</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="www.github.com/Morok1" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* AppCodeSignal */}
          <a href="https://app.codesignal.com/profile/%D0%B5%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9_%D0%BD%D0%B8_%D1%81" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true"></i>
          </a>

          {/* Ensmagin blog */}
          <a href="https://ensmagin.blogspot.com/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-rss" aria-hidden="true"></i>
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
