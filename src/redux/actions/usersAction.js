import * as type from '../types/usersTypes';

export function getUsers(users) {
  return {
    // type: type.GET_USERS,
    type: type.GET_USERS_SUCCESS,
    payload: users,
  };
}
