import React, { Component } from 'react'

export default class FooterNav extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      hidden: 'footer-hidden'
    };

    this.toggleDevs = this.toggleDevs.bind(this);
  };

  toggleDevs() {
    if (this.state.hidden === 'footer-hidden') {
      this.setState({hidden: ''});
      setTimeout((() => window.scrollBy({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
      })), 200);
    } else {
      this.setState({hidden: 'footer-hidden'});
    };
  };

  render() {

    return (
      <div className="footer">
        <div className="footer-nav" onClick={this.toggleDevs}>
          <div className="footer-about-us">
            <p>About Us</p>
            <p>▼</p>
          </div>
          <div className="icons">
            <a href="https://github.com/ahrampy/CampList">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div className="footer-about-us">
            <p>About Us</p>
            <p>▼</p>
          </div>

        </div>
        <div className={`developers ${this.state.hidden}`} >
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
              <a href="https://www.linkedin.com/in/adrian-rampy-1b8924198/">
                <i className="fab fa-linkedin fa-2x"></i>
                <p>LinkedIn</p>
              </a>
            </div>
          </div>
          <div>
            <div className="developer-pic">
              <img src="Will_Smith.jpg" alt=""/>
            </div>
            <div className="developer-name">
              <p>Will Smith</p>
            </div>
            <div className="developer-link">
              <a href="https://github.com/smithw94">
                <i className="fab fa-github fa-2x"></i>
                <p>GitHub</p>
              </a>
              <a href="https://www.linkedin.com/in/will-smith-0a958b198/">
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
              <a href="https://www.linkedin.com/in/maxmus-li">
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