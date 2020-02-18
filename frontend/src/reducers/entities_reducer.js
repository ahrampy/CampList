import { combineReducers } from "redux";
import sites from "./sites_reducer";
import users from "./users_reducer";
import reviews from "./reviews_reducer";

export default combineReducers({
  sites,
  users,
  reviews
});
