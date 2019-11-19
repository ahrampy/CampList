import React from 'react';
import UserReviews from './user_reviews';

class User extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    let reviews = this.props.fetchReviews(this.props.id)
    this.setState({ reviews })
  }

  render() {
    let { reviews } = this.state;
    return(
      <div>
        <div>
          {this.props.username}
        </div>
        <div>
          <UserReviews reviews={reviews}/>
        </div>
      </div>
    );
  }
}

export default User;