import { connect } from 'react-redux';
import { fetchSite, editSite } from '../../actions/site_actions';
import EditSiteForm from './edit_site_form';

const mapStateToProps = (state, ownProps) => ({
  site: state.entities.sites[ownProps.match.params.siteId],
});

const mapDispatchToProps = (dispatch) => ({
  editSite: site => dispatch(editSite(site)),
  fetchSite: id => dispatch(fetchSite(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditSiteForm);