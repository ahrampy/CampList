import React from 'react';
import ReviewListContainer from './review_list_container';
import ReviewFormContainer from './review_form_container';

class SiteReviews extends React.Component {

  constructor(props) {
    super(props)

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.update = this.update.bind(this);
  }

  // update(field) {
  //   return e => this.setState({ [field]: e.target.value })
  // }

  // dispatchOpenModal() {
  //   this.props.openModal('login')
  // }

  // handleSubmit(e) {
  //   e.preventDefault()
    
  //   if (!this.props.authorId) {
  //     return this.dispatchOpenModal()
  //   }

  //   // let newReview = { ...this.state, ...{author: this.props.authorId}}
  //   let newReview = {
  //     site: this.state.site,
  //     body: this.state.body,
  //     rating: this.state.rating,
  //     author: this.props.authorId
  //   }
  //   this.props.createReview(newReview)

  //   this.setState({
  //     body: '',
  //     rating: '5'
  //   })
  // }

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
        <ReviewFormContainer
          siteId={this.props.siteId}
        />
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