import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class EditSiteForm extends Component {
  constructor(props) {
    super(props);
    this.coords = { lat: props.lat, lng: props.lng };
    this.state = {
      description: this.props.site.description,
      name: this.props.site.name,
      date: this.props.site.date,
      photoFile: null,
      photoUrl: null,
      lat: this.props.site.lat, // for test
      lng: this.props.site.lng, // for test
      siteFeatures: {
        parking: this.props.site.parking,
        fishing: this.props.site.fishing,
        firePit: this.props.site.firePit,
        hiking: this.props.site.hiking,
        swimming: this.props.site.swimming,
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  componentDidMount() {
    this.props.fetchSite(this.props.match.params.siteId);
  }

  render() {
    const { site, formType, updateSite } = this.props;

    return (
      <div>
        test
      </div>
    )
  }
}

export default withRouter(EditSiteForm)