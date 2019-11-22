import React, { Component } from 'react'

export default class FooterNav extends Component {

  render() {

    return (
      <div className="footer">
        <div className="footer-nav">
          <div className="icons">
            <a href="https://github.com/ahrampy/CampList">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="developers">
          <div>
            <div className="developer-pic">
              <img src="Adrian_Rampy.jpg" alt=""/>
            </div>
            <div className="developer-name">
              <p>Adrian Rampy</p>
            </div>
            <div className="developer-link">
              <a href="https://github.com/ahrampy">
                <i className="fab fa-github fa-2x"></i>
                <p>GitHub</p>
              </a>
              <a href="">
                <i className="fab fa-linkedin fa-2x"></i>
                <p>LinkedIn</p>
              </a>
            </div>
          </div>
          <div>
            <div className="developer-pic">
              <img src="Will_smith.jpg" alt=""/>
            </div>
            <div className="developer-name">
              <p>Will Smith</p>
            </div>
            <div className="developer-link">
              <a href="https://github.com/smithw94">
                <i className="fab fa-github fa-2x"></i>
                <p>GitHub</p>
              </a>
              <a href="">
                <i className="fab fa-linkedin fa-2x"></i>
                <p>LinkedIn</p>
              </a>
            </div>
          </div>
          <div>
            <div className="develper-pic">
              <img src="Max_Li.jpg" alt=""/>
            </div>
            <div className="developer-name">
              <p>Max Li</p>
            </div>
            <div className="developer-link">
              <a href="https://github.com/Maxmusli">
                <i className="fab fa-github fa-2x"></i>
                <p>GitHub</p>
              </a>
              <a href="">
                <i className="fab fa-linkedin fa-2x"></i>
                <p>LinkedIn</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}