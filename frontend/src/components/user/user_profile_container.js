import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { selectSiteAuthor, selectUserReviews } from '../../reducers/selectors';
import { fetchReviews } from '../../actions/review_actions';
import { fetchSites } from '../../actions/site_actions';


const mSTP = (state, ownProps) => {
  let { id, username, email } = state.session.user
  let { sites, reviews } = state.entities

  let userCampsites = selectSiteAuthor(Object.values(sites), id)
  let userReviews = selectUserReviews(Object.values(reviews), id)

  return {
    id,
    username,
    email,
    userCampsites,
    userReviews,
    sites: Object.values(sites)
  }
}

const mDTP = dispatch => {
  return {
    fetchReviews:() => dispatch(fetchReviews()),
    fetchSites: () => dispatch(fetchSites())
  }
}

export default connect(mSTP, mDTP)(UserProfile);