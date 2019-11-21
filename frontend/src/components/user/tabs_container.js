import { connect } from 'react-redux';
import Tabs from './tabs';

const mSTP = (state, ownProps) => {
  
  return {
    tabSections: [
      {title: "Reviews", content: ownProps.userReviews},
      {title: "Bookmarks", content: ['Site1', 'Site2', 'Site3']},
      {title: "Your Campsites", content: ownProps.userCampsites} 
    ]
  }
}

export default connect(mSTP)(Tabs);