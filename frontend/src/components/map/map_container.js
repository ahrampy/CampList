import { connect } from 'react-redux';
import Map from './map';

import { selectSites } from '../../reducers/selectors';

const mSTP = (state, { attrs }) => {

  let filterSites = selectSites(Object.values(state.sites), attrs)

  return {
  }
}
