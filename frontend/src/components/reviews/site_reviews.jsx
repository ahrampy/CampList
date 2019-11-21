import React from 'react';
import ReviewList from './review_list'
import ReviewListContainer from './review_list_container';

class SiteReviews extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      site: this.props.siteId,
      body: '',
      rating: '5',
      siteReviews: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  dispatchOpenModal() {
    this.props.openModal('login')
  }

  handleSubmit(e) {
    e.preventDefault()
    
    if (!this.props.authorId) {
      return this.dispatchOpenModal()
    }

    // let newReview = { ...this.state, ...{author: this.props.authorId}}
    let newReview = {
      site: this.state.site,
      body: this.state.body,
      rating: this.state.rating,
      author: this.props.authorId
    }
    this.props.createReview(newReview)

    this.setState({
      body: '',
      rating: '5'
    })
  }

  componentDidMount() {
    let siteReviews = this.props.fetchSiteReviews(this.props.siteId);
    this.setState({
      siteReviews: Object.values(siteReviews)
    })
    if (!this.props.users) {
      this.props.fetchUsers()
    }
  }
  
  render() {
    
    if (!this.state.siteReviews) return null
    return(
      <div className="review-holder">
        <form onSubmit={this.handleSubmit} className="review-form">
          <p className="review-label">Submit your review here!</p>
          <div className="rating-container">
            <label className="rating-label">Rating (1-5)
              <input 
                className="rating-input"
                type="number"
                min="0"
                max="5"
                value={this.state.rating}
                onChange={this.update("rating")}
                id="rating"
              />
              {/* <span>
                <input type="radio" name="rating" value="1" >1</input>
                <input type="radio" name="rating" value="2" >2</input>
                <input type="radio" name="rating" value="3" >3</input>
                <input type="radio" name="rating" value="4" >4</input>
                <input type="radio" name="rating" value="5" >5</input>
              </span> */}
            </label>
          </div>
          <div className="body-container">      
            <textarea
              className="body-input"
              placeholder="Tell us about your stay"
              required
              cols="31"
              value={this.state.body}
              onChange={this.update("body")}
            />           
          </div>
          <div className="submit-btn">
            <button type="submit" className="btn">Submit Review</button>
          </div>
        </form>
        <div className="review-list">
          <ReviewListContainer
            reviews={this.state.siteReviews}
            users={this.props.users}
          />
        </div>
      </div>
    );
  }
}

export default SiteReviews;