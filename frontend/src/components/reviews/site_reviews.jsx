import React from 'react';
import ReviewListContainer from './review_list_container';
import ReviewFormContainer from './review_form_container';

class SiteReviews extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchSiteReviews(this.props.siteId);
    if (!this.props.users) {
      this.props.fetchUsers()
    }

  }
  
  render() {
    if (!this.props.reviews) return null

    return(
      <div className="review-holder">
        <div className="review-form-container">
          <ReviewFormContainer
            siteId={this.props.siteId}
          />
        </div>
        <div className="review-list">
          <ReviewListContainer
            reviews={this.props.reviews}
            users={this.props.users}
            siteId={this.props.siteId}
          />
        </div>
      </div>
    );
  }
}

export default SiteReviews;