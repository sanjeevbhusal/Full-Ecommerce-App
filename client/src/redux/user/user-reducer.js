import UserTypes from "./user-types";

const initialState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserTypes.SIGNIN_SUCCESS:
    case UserTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };

    case UserTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };

    case UserTypes.SIGNIN_FAILURE:
    case UserTypes.SIGNOUT_FAILURE:
    case UserTypes.SIGNIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
