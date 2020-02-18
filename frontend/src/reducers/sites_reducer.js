import { RECEIVE_SITES, RECEIVE_SITE } from "../actions/site_actions";

const SitesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SITE:
      newState[action.site.data._id] = action.site.data;
      return newState;
    case RECEIVE_SITES:
      return Object.assign({}, state, action.sites.data);
    default:
      return state;
  }
};

export default SitesReducer;
