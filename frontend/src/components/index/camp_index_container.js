import { connect } from 'react-redux';
import CampIndex from './camp_index';
import { fetchSites } from '../../actions/site_actions';
import { fetchUsers } from '../../actions/user_actions';

const mSTP = state => {
  let attrs = [ 
    {id: 1, name: 'hiking'}, 
    {id: 2, name: 'parking'}, 
    {id: 3, name: 'fishing'},
    {id: 4, name: 'firePit'}
  ]
  return {
    sites: Object.values(state.entities.sites),
    attrs,
    users: Object.values(state.entities.users)
  }
}

const mDTP = dispatch => ({
  fetchSites: () => dispatch(fetchSites()),
  fetchUsers: () => dispatch(fetchUsers())  
});
   


export default connect(mSTP, mDTP)(CampIndex);
