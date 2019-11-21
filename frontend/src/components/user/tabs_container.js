import { connect } from 'react-redux';
import Tabs from './tabs';
import { selectSiteNames } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {

  
  
  let newReviews = selectSiteNames(ownProps.sites, ownProps.userReviews)
  
  debugger
  return {
    tabSections: [
      {title: "Reviews", content: newReviews},
      {title: "Bookmarks", content: ['Site1', 'Site2', 'Site3']},
      {title: "Your Campsites", content: ownProps.userCampsites} 
    ]
  }
}

export default connect(mSTP)(Tabs);