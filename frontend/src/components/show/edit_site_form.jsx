import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import EditSiteFormDetail from './edit_site_form_detail';

class EditSiteForm extends Component {
  componentDidMount() {
    this.props.fetchSite(this.props.match.params.siteId);
  }

  render() {
    if (!this.props.site) return null
    
    return (
      <div>
        <EditSiteFormDetail
          site={this.props.site}
          editSite={this.props.editSite}
        />
      </div>
    )
  }
}

export default withRouter(EditSiteForm)