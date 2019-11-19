import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import entites from './entities_reducer';

const RootReducer = combineReducers({
  entites,
  errors,
  session,
  ui
});

export default RootReducer;