import React, { Component } from 'react'

export default class FooterNav extends Component {

  render() {

    return (
      <div className="footer">
        <div className="footer-nav">
          <div className="icons">
            <a href="">
              <i className="fab fa-github fa-2x"></i>
              
            </a>
          </div>
        </div>
        <div className="developers">
          <div>
            <div className="developer-pic">
            </div>
            <div>
              <p>Adrian Rampy</p>
            </div>
            <div>
              <a href="">
                <i className="fab fa-github fa-2x"></i>
              </a>
            </div>
          </div>
          <div>
            <div className="developer-pic">
              
            </div>
            <div>
              <p>Will Smith</p>
            </div>
            <div>
              <a href="">
                <i className="fab fa-github fa-2x"></i>
                
              </a>
            </div>
          </div>
          <div>
            <div className="develper-pic">
              
            </div>
            <div>
              <p>Max Li</p>
            </div>
            <div>
              <a href="">
                <i className="fab fa-github fa-2x"></i>
                
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}