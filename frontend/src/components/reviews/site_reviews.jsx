import React from 'react';

class SiteReviews extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      author: this.props.authorId,
      site: this.props.siteId,
      body: 'Test Review',
      rating: '5'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault()
    this.props.createReview(this.state)
  }
  

  render() {
    debugger
    return(
      <div>
        <button type="submit" onClick={this.handleSubmit}>Submit Test Review</button>
      </div>
    );
  }
}

export default SiteReviews;