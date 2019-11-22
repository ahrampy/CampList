import { connect } from 'react-redux';
import { createNewSite } from '../../actions/site_actions';
import SiteForm from './site_form';
import { openModal } from '../../actions/modal';

const mapStateToProps = (state, { location }) => ({
  lat: new URLSearchParams(location.search).get('lat'),
  lng: new URLSearchParams(location.search).get('lng')
});

const mapDispatchToProps = dispatch => ({
  createNewSite: site => dispatch(createNewSite(site)),
  openModal: modal => dispatch(openModal(modal)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteForm);