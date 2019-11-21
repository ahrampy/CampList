import React, { Component } from 'react'
import SiteDetail from './site_detail';
import SiteReviewsContainer from '../reviews/site_reviews_container';

export default class SiteShow extends Component {

  constructor(props) {
    super(props)

    this.state = {
      authorId : this.props.authorId,
      siteId : this.props.siteId
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchSite(this.props.match.params.siteId)

    
    this.props.fetchSiteReviews(this.props.siteId)
  }

  render() {
    if (!this.props.site) return null
    const { site } = this.props
    
    // make sure userId and siteId are correct
    return (
      <div>
        <div>
          <SiteDetail 
          site={site}
          />
        </div>
        <div>
          <SiteReviewsContainer 
            authorId={this.state.authorId}
            siteId={this.state.siteId}
          />
        </div>
      </div>
    )
  }
}
