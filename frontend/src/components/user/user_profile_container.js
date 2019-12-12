import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { selectSiteAuthor, selectUserReviews, selectUserPhotos } from '../../reducers/selectors';
import { fetchReviews } from '../../actions/review_actions';
import { fetchSites } from '../../actions/site_actions';


const mSTP = (state, ownProps) => {
  let { id, username, email } = state.session.user
  let { sites, reviews } = state.entities
  console.log(state)
  let userCampsites = selectSiteAuthor(Object.values(sites), id)
  let userReviews = selectUserReviews(Object.values(reviews.all), id)
  let userPhotos = selectUserPhotos(Object.values(sites), id)
  return {
    id,
    username,
    email,
    userCampsites,
    userReviews,
    sites: Object.values(sites),
    session: state.session,
    userPhotos
  }
}

const mDTP = dispatch => {
  return {
    fetchReviews:() => dispatch(fetchReviews()),
    fetchSites: () => dispatch(fetchSites())
  }
}

export default connect(mSTP, mDTP)(UserProfile);