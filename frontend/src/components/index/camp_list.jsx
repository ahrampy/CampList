import React from "react";

class CampList extends React.Component {
  constructor(props) {
    super(props);
  }

  listCamps() {
    let { sites } = this.props;
    //site.photoURL[0].url
    return (
      <div>
        { sites.map((site, i) => 
          <div key={ i } className="camp-site">
            <div className="photo-thumbnail">
              <img src={`${site.photoUrl[0].url}`} alt=""/>
            </div>
            <div className="site-info">
              <div className="site-name">
                {site.name}
              </div>
              <div className="site-amenities">
                { Object.keys(site.siteFeatures).map((key, i) => {
                  console.log(key)
                  if (site.siteFeatures[key] && key === 'firePit') {
                    return <img src="fire_icon.png" alt=""/>
                  }
                  // if (site.siteFeatures[key] && key === 'hiking') {
                  //   return <img src="trail_flag.png" alt=""/>
                  // }
                  if (site.siteFeatures[key]) {
                    return <img src={`${key}.png`} alt=""/>
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
    console.log(this.props.sites);
    return(
      <div className="camp-list">
        {this.listCamps()} 
      </div>
    )
  }
}

export default CampList;