import { connect } from 'react-redux';
import { createNewSite } from '../../actions/site_actions';
import SiteForm from './site_form';

const mapStateToProps = (state, { locatoin }) => ({
  lat: new URLSearchParams(location.search).get('lat'),
  lng: new URLSearchParams(location.search).get('lng')
});

const mapDispatchToProps = dispatch => ({
  createNewSite: site => dispatch(createNewSite(site))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteForm);