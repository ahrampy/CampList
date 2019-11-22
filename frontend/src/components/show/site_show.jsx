import React, { Component } from 'react'
import SiteDetail from './site_detail';
import SiteReviewsContainer from '../reviews/site_reviews_container';

export default class SiteShow extends Component {

  constructor(props) {
    super(props)

    this.state = {
      siteId : this.props.siteId

    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchSite(this.props.match.params.siteId)
    this.props.fetchUsers()

  }

  render() {
    if (!this.props.site) return null
    const { site } = this.props
    
    return (
      <div>
        <div>
          <SiteDetail 
          site={site}
          fetchUsers={this.props.fetchUsers}
          />
        </div>
        <div>
          <SiteReviewsContainer 
            siteId={this.state.siteId}
            users={this.props.users}
          />
        </div>
      </div>
    )
  }
}
