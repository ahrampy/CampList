import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ShowMap from '../maps/show_map';

class SiteDetail extends Component {

  render() {
    const {
      author, name, date, description, siteFeatures
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
                    {siteFeatures.hiking.toString()}
                  </div>
                </div>
                <div className="firePit">
                  <div className="show-feature-label">
                    Fire Pit:
                  </div>
                  <div className="show-feature-body">
                    {siteFeatures.firePit.toString()}
                  </div>
                </div>
                <div className="parking">
                  <div className="show-feature-label">
                    Nearby Parking:
                  </div>
                  <div className="show-feature-body">
                    {siteFeatures.parking.toString()}
                  </div>
                </div>
                <div className="fishing">
                  <div className="show-feature-label">
                    Fishing Spot:
                  </div>
                  <div className="show-feature-body">
                    {siteFeatures.fishing.toString()}
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