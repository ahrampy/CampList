import { connect } from 'react-redux';
import CampList from './camp_list';
import { selectSites } from '../../reducers/selectors';

const mSTP = (state, { checkedAttrs, sites, hover }) => {
  let filterSites = selectSites(Object.values(sites), checkedAttrs)
  
  return {
    sites: filterSites,
    hover: hover
  };
}

export default connect(mSTP)(CampList);