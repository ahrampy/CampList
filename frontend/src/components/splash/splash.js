import React from 'react';
import { Link } from "react-router-dom";

class Splash extends React.Component {
  componentDidMount() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  render() {
    return (
      <div className="splash-main">
        <div className="splash-enter">
          <div className="splash-buttons">
            <Link to="/campsites">Start Camping</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;