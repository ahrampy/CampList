import { connect } from 'react-redux';
import Tabs from './tabs';

const mSTP = (state, ownProps) => {
  return {
    // reviews: ownProps.reviews,
    tabSections: [
      {title: "Reveiws", content: ['Review 1', 'Review 2', 'Review 3']},
      {title: "Bookmarks", content: ['Site1', 'Site2', 'Site3']},
      {title: "Your Campsites", content: ownProps.createdCampsites} 
    ]
  }
}

export default connect(mSTP)(Tabs);