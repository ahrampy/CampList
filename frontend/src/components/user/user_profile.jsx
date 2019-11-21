import React from 'react';
import TabsContainer from './tabs_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchReviews()
    this.props.fetchSites()
  }

  render() {
    if (!this.props.sites) return null

    
    let { userReviews, userCampsites } = this.props;
    return(
      <div className="user-main">
        <div className="user-details">
          Hi {this.props.username}!
        </div>
        <div className="user-tabs">
          <TabsContainer 
            userCampsites={userCampsites}
            userReviews={userReviews}
          />
        </div>
      </div>
    );
  }
}

export default UserProfile;