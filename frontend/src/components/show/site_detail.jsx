import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ShowMap from '../maps/show_map';

class SiteDetail extends Component {

  handleSiteFeatures(feature) {
    if (this.props.site.siteFeatures[feature] === true) {
      return "Yes";
    } else {
      return "No";
    }
  }

  render() {
    const {
      author, name, date, description
    } = this.props.site
    // author commented out?
    
    return (
      <div className="show-outer-container">
        <div className="show-detail-wrapper">
          <div className="show-map-info">
            <ShowMap site={this.props.site}/>
          </div>
          <div className="show-info-wrapper">
            <div className="author-name">
              {author}
            </div>
            <div className="show-title-bar">
              <div className="show-name">
                {name}
              </div>
            </div>
            
            <div className="show-mid-section">
              <div className="site-features">
                <div className="create-date">
                  <div className="show-feature-label">
                    Created by:
                  </div>
                  <div className="show-feature-body">
                    author on {date}
                  </div>
                </div>
                <div className="hiking">
                  <div className="show-feature-label">
                    Hiking Trails:
                  </div>
                  <div className="show-feature-body">
                    {this.handleSiteFeatures("hiking")}
                  </div>
                </div>
                <div className="firePit">
                  <div className="show-feature-label">
                    Fire Pit:
                  </div>
                  <div className="show-feature-body">
                    {this.handleSiteFeatures("firePit")}
                  </div>
                </div>
                <div className="parking">
                  <div className="show-feature-label">
                    Nearby Parking:
                  </div>
                  <div className="show-feature-body">
                    {this.handleSiteFeatures("parking")}
                  </div>
                </div>
                <div className="fishing">
                  <div className="show-feature-label">
                    Fishing Spot:
                  </div>
                  <div className="show-feature-body">
                    {this.handleSiteFeatures("fishing")}
                  </div>
                </div>
              </div>
            
              <div className="show-picture-wrapper">
                <div>
                  pic
                </div>
                
              </div>
            </div>

            <div className="show-description">
              <h3>Description</h3>
              <div>
                {description}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SiteDetail);