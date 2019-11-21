import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { selectSiteAuthor, selectUserReviews } from '../../reducers/selectors';
import { fetchReviews } from '../../actions/review_actions';


const mSTP = (state, ownProps) => {
  let { id, username, email } = state.session.user
  let { sites, reviews } = state.entities
  let createdCampsites = selectSiteAuthor(sites, id)
  let userReviews = selectUserReviews(Object.values(reviews), id)
  
  return {
    id,
    username,
    email,
    createdCampsites,
    userReviews
  }
}

const mDTP = dispatch => {
  return {
    fetchReviews:() => dispatch(fetchReviews())
  }
}

export default connect(mSTP, mDTP)(UserProfile);