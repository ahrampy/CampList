import * as APIUtil from '../util/user_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'

const receiveUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
})

export const fetchUsers = () => dispatch => APIUtil.fetchUsers()
  .then(users => dispatch(receiveUsers(users)));