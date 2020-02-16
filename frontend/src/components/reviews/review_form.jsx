import React from 'react';
import { withRouter } from 'react-router-dom';
class ReviewForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = this.props.review
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  dispatchOpenModal() {
    this.props.openModal('login')
  }

  handleSubmit(e) {
    e.preventDefault()
    
    if (this.props.formType !== 'Update Review' && !this.props.authorId) {
      return this.dispatchOpenModal()
    }

    let review = {
      site: this.state.site,
      body: this.state.body,
      rating: this.state.rating,
      author: this.props.authorId
    }

    if (this.props.formType === 'Update Review') {
      review = { ...review, ...{id: this.props.match.params.reviewId}}
    }
    this.props.submitReview(review)
    if (this.props.formType === 'Update Review') {
      this.props.history.goBack()
    }
    this.setState({
      body: '',
      rating: '5'
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="review-form">
        <p className="review-label">{this.props.formType}</p>
        <div className="rating-container">      
          <div className="rate">

            <span>Rating: 5</span>
            <input type="radio" id="5" name="drone" value="5"
            onChange={this.update("rating")}/> 
          </div>
          <div className="rate">
            <span>4</span>
            <input type="radio" id="4" name="drone" value="4"
              onChange={this.update("rating")}/>                 
          </div>             
          <div className="rate">
            <span>3</span>
            <input type="radio" id="3" name="drone" value="3"
              onChange={this.update("rating")}/>                  
          </div>             
          <div className="rate">
            <span>2</span>
            <input type="radio" id="2" name="drone" value="2"
              onChange={this.update("rating")}/>                 
          </div>             
          <div className="rate">
            <span>1</span>
            <input type="radio" id="1" name="drone" value="1"
              onChange={this.update("rating")}/>
          </div>                         
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
            <button type="submit" className="btn">Submit</button>
          </div>
      </form>
    )
  }
}
export default withRouter(ReviewForm);