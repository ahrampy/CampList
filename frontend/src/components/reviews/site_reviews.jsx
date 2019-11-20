import React from 'react';

class SiteReviews extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    debugger
    return(
      <div>
        Review Form here!
        <br/>
        siteId: {this.props.siteId}
        <br/>
        authorId: {this.props.authorId}
      </div>
    );
  }
}

export default SiteReviews;