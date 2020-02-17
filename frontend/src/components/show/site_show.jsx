import React, { Component } from 'react'
import SiteDetail from './site_detail';
import SiteReviewsContainer from '../reviews/site_reviews_container';
import FooterNav from '../nav/footer_nav';

export default class SiteShow extends Component {

  constructor(props) {
    super(props)

    this.state = {
      siteId : this.props.siteId,
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchSite(this.props.match.params.siteId)
    this.props.fetchUsers()
  }

  handleDropDown(event) { 
    if (!event.target.matches('.dropbtn') 
        && !event.target.matches('.review-label') 
        && !event.target.matches('span') 
        && !event.target.matches('input') 
        && !event.target.matches('.body-input')) {
        let dropdowns = document.querySelector(".dropdown-content");
        if (dropdowns.classList.contains('show')) {
          dropdowns.classList.remove('show');
      }
    } 
  }
  
  render() {
    if (!this.props.site) return null
    const { site } = this.props
    return (
      <div className='show-main-container' onClick={(e) => this.handleDropDown(e)}>
        <div className='show-detail-container'>
          <SiteDetail 
          site={site}
          siteId={this.state.siteId}
          addPhoto={this.props.addPhoto}
          currentUserId={this.props.currentUserId}
          siteAuthor={this.props.siteAuthor}
          />
        </div>
        <div className="show-review-container">
          <SiteReviewsContainer 
            siteId={this.state.siteId}
          />
        </div>
        <div>
          <FooterNav />
        </div>
      </div>
    )
  }
}
