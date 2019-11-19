import React, { Component } from 'react'
import SiteDetail from './site_detail';

export default class SiteShow extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchSite(this.props.match.params.siteId)
  }

  render() {
    const { site } = this.props

    if (!site) return null

    return (
      <div>
        <SiteDetail />
      </div>
    )
  }
}
