import { connect } from 'react-redux';
import { fetchSite } from '../../actions/site_actions'
import SiteShow from './site_show';

import { fetchSiteReviews } from '../../actions/review_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  // const siteId = parseInt(ownProps.match.params.siteId);
  // const site = seleteSite(state.entites, siteId);
  let siteId = ownProps.match.params.siteId
  
  return ({
    siteId,
    site: state.entities.sites[ownProps.match.params.siteId],
    siteReviews: Object.values(state.entities.reviews),
    users: state.entities.users
  });
};

const mapDispatchToProps = dispatch => ({
  fetchSite: id => dispatch(fetchSite(id)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteShow);