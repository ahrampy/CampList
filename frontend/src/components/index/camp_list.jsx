import React from "react";
import { withRouter } from 'react-router-dom';

class CampList extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this)
  }

  redirect(id) {
    let path = "campsites/" + id;
    this.props.history.push(path);
  }

  listCamps() {
    let { sites } = this.props;
    return (
      <div className="camp-list-2">
        { sites.map((site, i) => 
          <div onClick={() => this.redirect(site._id)} key={ i } className="camp-site">
            <div className="photo-thumbnail">
              <img src={`${site.photoUrl[0].url}`} alt=""/>
            </div>
            <div className="site-info">
              <div className="site-name">
                {site.name}
              </div>
              <div className="site-amenities">
                { Object.keys(site.siteFeatures).map((key, i) => {
                  if (site.siteFeatures[key] && key === 'firePit') {
                    return <img key={i} src="fire_icon.png" alt=""/>
                  } else if (site.siteFeatures[key]) {
                    return <img key={i} src={`${key}.png`} alt=""/>
                  } 
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  render() {
    return(
      <div className="camp-list">
        {this.listCamps()} 
      </div>
    )
  }
}

export default withRouter(CampList);