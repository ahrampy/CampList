import {
  RECEIVE_NEW_SITE,
  RECEIVE_SITES,
  RECEIVE_USER_SITES,
  RECEIVE_SITE
} from '../actions/site_actions';

const SitesReducer = (state = {
  all: {}, user: {}, new: undefined, current: {}
}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (actoin.type) {
    case RECEIVE_SITE:
      newState.current = action.site.data;
      return newState;
    case RECEIVE_NEW_SITE:
      newState.new = action.site.data;
      return newState;
    case RECEIVE_SITES:
      newState.all = action.sites.data;
      return newState;
    case RECEIVE_USER_SITES:
      newState.user = action.sites.data;
      return newState;
    default:
      return state;
  }
}

export default SitesReducer;