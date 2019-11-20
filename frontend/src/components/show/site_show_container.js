import { connect } from 'react-redux';
import { fetchSite } from '../../actions/site_actions'
import SiteShow from './site_show';

const mapStateToProps = (state, ownProps) => {
  const siteId = parseInt(ownProps.match.params.siteId);
  // const site = seleteSite(state.entites, siteId);
  
  return ({
    siteId,
    // site: state.entities.sites[ownProps.match.params.siteId]
  });
};

const mapDispatchToProps = dispatch => ({
  fetchSite: id => dispatch(fetchSite(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteShow);