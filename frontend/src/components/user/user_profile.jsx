import React from 'react';
import TabsContainer from './tabs_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)

  }

  // componentDidMount() {
  //   this.props.getUser(this.props.id)
  // }

  render() {
    // if (!this.props.user) return null

    // let { reviews } = this.props.siteReviews;
    return(
      <div className="user-main">
        <div className="user-details">
          Hi {this.props.username}!
        </div>
        <div className="user-tabs">
          <TabsContainer 
            createdCampsites={this.props.createdCampsites}
          />
        </div>
      </div>
    );
  }
}

export default UserProfile;