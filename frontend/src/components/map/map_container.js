import { connect } from 'react-redux';
import Map from './map';
import { selectSites } from '../../reducers/selectors';

const mSTP = (state, { checkedAttrs, sites }) => {
  // let filterSites = selectSites(Object.values(sites), checkedAttrs)
  return {
    // filterSites
    sites
  }
}

export default connect(mSTP)(Map);
