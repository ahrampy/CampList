import { connect } from 'react-redux';
import Tabs from './tabs';

const mSTP = (state, ownProps) => {

  return {
    reviews: ownProps.revews,
    tabSections: [
      {title: "Reveiws", content: ['Review 1', 'Review 2', 'Review 3']},
      {title: "Bookmarks", content: ['Site1', 'Site2', 'Site3']},
      {title: "Camping History", content: ['Camping at Site 1', 'Camping at Site 2', 'Camping at Site 3']} 
    ]
  }
}

export default connect(mSTP)(Tabs);