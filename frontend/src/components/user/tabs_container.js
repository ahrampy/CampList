import { connect } from 'react-redux';
import Tabs from './tabs';
import { selectSiteNames } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
  let newReviews = selectSiteNames(ownProps.sites, ownProps.userReviews)
  
  return {
    tabSections: [
      {title: "Reviews", content: newReviews},
      {title: "Bookmarks", content: []},
      {title: "Your Campsites", content: ownProps.userCampsites} 
    ],
    username: ownProps.username
  }
}

export default connect(mSTP)(Tabs);