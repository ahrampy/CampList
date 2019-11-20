import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { selectSiteAuthor } from '../../reducers/selectors';


const mSTP = (state, ownProps) => {
  let { id, username, email } = state.session.user
  let { sites } = state.entities
  let createdCampsites = selectSiteAuthor(sites, id)
  
  return {
    id,
    username,
    email,
    createdCampsites
  }
}

// const mDTP = dispatch => {

//   return {
//     getUser: id => dispatch(getUser(id))
//   }
// }

export default connect(mSTP)(UserProfile);