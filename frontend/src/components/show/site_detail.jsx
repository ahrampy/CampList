import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
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
      author, name, date, description, _id, photoUrl
    } = this.props.site
    // author commented out?
    if (!this.props.siteAuthor) return null
    debugger
    return (
      <div className="show-outer-container">
        <div className="show-detail-wrapper">
          <div className="show-map-info">
            <ShowMap site={this.props.site}/>
          </div>
          <div className="show-info-wrapper">
            <div className="show-title-bar">
              <div className="show-name">
                {name}
              </div>
              <div>
                {
                  this.props.currentUserId === author ? 
                    <div className="edit-btn">
                      <Link to={`/campsites/edit/${_id}`}>Edit</Link>
                    </div>
                    :
                    null
                }
              </div>
            </div>
            
            <div className="show-mid-section">
              <div className="site-features">
                <div className="create-date">
                  <div className="show-feature-label">
                    <h3>Created by:</h3>
                  </div>
                  <div className="show-feature-body">
                    <div id="show-username">
                      {this.props.siteAuthor.username}
                    </div>
                    <div >
                      on {date}
                    </div>
                  </div>
                </div>
                <div className="hiking">
                  <div className="show-feature-label">
                    <img src="trail_flag.png" />
                    <div>
                      Hiking Trails:
                    </div>
                  </div>
                  <div className="show-feature-body">
                    {this.handleSiteFeatures("hiking")}
                  </div>
                </div>
                <div className="firePit">
                  <div className="show-feature-label">
                    <img src="fire_icon.png" />
                    Fire Pit:
                  </div>
                  <div className="show-feature-body">
                    {this.handleSiteFeatures("firePit")}
                  </div>
                </div>
                <div className="parking">
                  <div className="show-feature-label">
                    <img src="parking.png" alt=""/>
                    Nearby Parking:
                  </div>
                  <div className="show-feature-body">
                    {this.handleSiteFeatures("parking")}
                  </div>
                </div>
                <div className="fishing">
                  <div className="show-feature-label">
                    <img src="fishing.png" />
                    Fishing Spot:
                  </div>
                  <div className="show-feature-body">
                    {this.handleSiteFeatures("fishing")}
                  </div>
                </div>
                <div className="swimming">
                  <div className="show-feature-label">
                    <img src="swimming.png" alt=""/>
                    Swimming:
                  </div>
                  <div className="show-feature-body">
                    {this.handleSiteFeatures("swimming")}
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