import { connect } from 'react-redux';
import CampIndex from './camp_index';
import { fetchSites } from '../../actions/site_actions'

const mSTP = state => {
  let attrs = [ 
    {id: 1, name: 'hiking'}, 
    {id: 2, name: 'water present'}, 
    {id: 3, name: 'fishing'},
    {id: 4, name: 'firepit'}
  ]
  debugger
  return {
    sites: state.entities.sites,
    attrs
  }
}

const mDTP = dispatch => ({
  fetchSites: () => dispatch(fetchSites()),
});
   


export default connect(mSTP, mDTP)(CampIndex);