import React from 'react';

class SiteReviews extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      author: this.props.authorId,
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


  handleSubmit(e) {
    e.preventDefault()
    this.props.createReview(this.state)
  }
  

  render() {
    
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Rating (1-5)
            <input 
              type="number"
              min="0"
              max="5"
              value={this.state.rating}
              onChange={this.update("rating")}
              id="rating"
            />
          </label>
            <br/>
          <label>Review </label>
            <br/>
          <textarea
            required
            cols="31"
            value={this.state.body}
            onChange={this.update("body")}
          />
          <br/>
          <button type="submit" >Submit Test Review</button>
        </form>
      </div>
    );
  }
}

export default SiteReviews;