import React from 'react';

class SiteReviews extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      site: this.props.siteId,
      body: '',
      rating: '5'
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

    // let newReview = Object.assign(({}, this.state, {author: this.props.authorId}))
    let newReview = { ...this.state, ...{author: this.props.authorId}}

    this.props.createReview(newReview)


    this.setState({
      body: '',
      rating: '5'
    })
  }
  

  render() {
    
    return(
      <div className="review-holder">
        <p className="review-label">Submit your review here!</p>
        <form onSubmit={this.handleSubmit} className="review-form">
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
      </div>
    );
  }
}

export default SiteReviews;