import UserTypes from "./user-types";

export const signupStart = (userCredintials) => ({
  type: UserTypes.SIGNUP_START,
  payload: userCredintials,
});

export const signupSuccess = (user) => ({
  type: UserTypes.SIGNUP_SUCCESS,
  payload: user,
});

export const signupFailure = (error) => ({
  type: UserTypes.SIGNUP_FAILURE,
  payload: error,
});

export const googleSigninStart = () => ({
  type: UserTypes.GOOGLE_SIGNIN_START,
});

export const emailSigninStart = (usersCredintial) => ({
  type: UserTypes.EMAIL_SIGNIN_START,
  payload: usersCredintial,
});

export const signinSuccess = (user) => ({
  type: UserTypes.SIGNIN_SUCCESS,
  payload: user,
});

export const signinFailure = (error) => ({
  type: UserTypes.SIGNIN_FAILURE,
  payload: error,
});

export const signoutStart = () => ({
  type: UserTypes.SIGNOUT_START,
});

export const signoutSuccess = (userAuth) => ({
  type: UserTypes.SIGNOUT_SUCCESS,
  payload: userAuth,
});

export const signoutFailure = (error) => ({
  type: UserTypes.SIGNOUT_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: UserTypes.CHECK_USER_SESSION,
});
