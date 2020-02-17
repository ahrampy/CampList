import { connect } from 'react-redux';
import Map from './index_map';
import { selectSites } from '../../reducers/selectors';

const mSTP = (state, { checkedAttrs, sites, location }) => {
  let filterSites = selectSites(Object.values(sites), checkedAttrs)
  console.log(location)
  return {
    sites: filterSites
  };
}

export default connect(mSTP)(Map);
