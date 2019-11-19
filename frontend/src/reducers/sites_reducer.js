import {
  RECEIVE_SITES,
  RECEIVE_SITE
} from '../actions/site_actions';

const SitesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SITE:
      newState.site.id = action.site;
      return newState;
    case RECEIVE_SITES:
      return action.sites;
    default:
      return state;
  }
}

export default SitesReducer;