import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SiteDetail extends Component {

  render() {
    const {
      author, name, date, description, siteFeatures
    } = this.props.site

    return (
      <div>
        {author}
        {name}
        {date}
        {description}
        {siteFeatures.hiking}
        {siteFeatures.firePit}
        {siteFeatures.parking}
        {siteFeatures.fishing}
      </div>
    )
  }
}

export default withRouter(SiteDetail);