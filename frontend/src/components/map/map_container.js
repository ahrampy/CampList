import { connect } from 'react-redux';
import Map from './map';
import { selectSites } from '../../reducers/selectors';

const mSTP = (state, { checkedAttrs }) => {
  // let filterSites = selectSites(Object.values(state.sites), checkedAttrs)
  
  return {
    // filterSites
  }
}

export default connect(mSTP)(Map);
