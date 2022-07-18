import * as type from '../types/usersTypes';

const initialState = {
  allUsers: [],
  isLoading: false,
  error: null,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    // case type.GET_USERS:
    case type.GET_USERS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allUsers: action.payload,
        // allUsers: action.allUsers,
      };
    case type.GET_USERS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
