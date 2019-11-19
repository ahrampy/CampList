import { connect } from 'react-redux';
import UserProfile from './user_profile';
import getUser from '../../actions/user';
import { selectSiteReviews } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
  let { id } = state.session
  let { sites } = state
  const siteReviews = selectSiteReviews(sites, id)

  return {
    id,
    siteReviews,
    user: state.user
  }
}

const mDTP = dispatch => {

  return {
    getUser: id => dispatch(getUser(id))
  }
}

export default connect(mSTP, mDTP)(UserProfile);