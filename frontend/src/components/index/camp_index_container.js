import { connect } from 'react-redux';
import CampIndex from './camp_index';

const mSTP = state => {
  let attrs = [ 
    {id: 1, name: 'hiking'}, 
    {id: 2, name: 'water present'}, 
    {id: 3, name: 'fishing'},
    {id: 4, name: 'firepit'}
  ]
  return {
    attrs
  }
}

export default connect(mSTP)(CampIndex);