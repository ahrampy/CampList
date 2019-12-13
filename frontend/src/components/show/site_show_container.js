import { connect } from 'react-redux';
import { fetchSite, addPhoto } from '../../actions/site_actions';
import { fetchUsers } from '../../actions/user_actions'
import SiteShow from './site_show';

import { fetchSiteReviews } from '../../actions/review_actions';
import { selectSiteAuthorName } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let siteId = ownProps.match.params.siteId;
  let currentUserId;
  if (state.session.isAuthenticated) {
    currentUserId = state.session.user.id
  }
  
  let siteAuthor = selectSiteAuthorName(
    Object.values(state.entities.sites), Object.values(state.entities.users)
  )
  
  return ({
    siteId,
    site: state.entities.sites[ownProps.match.params.siteId],
    users: state.entities.users,
    currentUserId: currentUserId || 0,
    siteAuthor: siteAuthor
  });
};

const mapDispatchToProps = dispatch => ({
  fetchSite: id => dispatch(fetchSite(id)),
  addPhoto: data => dispatch(addPhoto(data)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteShow);