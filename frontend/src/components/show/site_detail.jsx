import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SiteDetail extends Component {

  render() {
    const {
      author, name, date, description, siteFeatures
    } = this.props.site
    
    return (
      <div className="show-detail-wrapper">
        <div className="show-info-wrapper">
          <div className="author-name">
            {/* {author} */}
          </div>
          <div className="show-title-bar">
            <div className="show-name">
              {name}
            </div>
            <div className="create-date">
              {date}
            </div>
          </div>
          
          <div>
            <div className="hiking">
              {siteFeatures.hiking.toString()}
            </div>
            <div className="firePit">
              {siteFeatures.firePit.toString()}
            </div>
            <div className="parking">
              {siteFeatures.parking.toString()}
            </div>
            <div className="fishing">
              {siteFeatures.fishing.toString()}
            </div>
          </div>
          <div className="show-description">
            {description}
          </div>
          
        </div>
        <div className="show-picture-wrapper">
          pic
        </div>
      </div>
    )
  }
}

export default withRouter(SiteDetail);