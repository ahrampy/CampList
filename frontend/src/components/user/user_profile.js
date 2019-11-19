import React from 'react';
import UserReviews from './user_reviews';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.getUser(this.props.id)
  }

  render() {
    if (!this.props.user) return null

    let { reviews } = this.props.siteReviews;
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

export default UserProfile;