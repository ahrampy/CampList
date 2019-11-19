import React, { Component } from 'react'
import SiteDetail from './site_detail';

export default class SiteShow extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchSite(this.props.match.params.siteId)
  }

  render() {
    if (!this.props.site) return null
    const { site } = this.props

    debugger
    return (
      <div>
        <SiteDetail 
        site={this.props.site}
        />
      </div>
    )
  }
}
