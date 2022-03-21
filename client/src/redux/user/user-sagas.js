import { takeLatest, all, call, put } from "redux-saga/effects";
import UserTypes from "./user-types";
import {
  signinSuccess,
  signinFailure,
  signoutSuccess,
  signoutFailure,
  signupSuccess,
  signupFailure,
} from "./user-actions";

import {
  signInWithPopup,
  googleProvider,
  authInstance,
  getDoc,
  createUserProfileDocument,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getCurrentUser,
} from "../../firebase/firebase.utils";

///////////////////////////User Authentication////////////////////////////////

function* authenticateUser(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield getDoc(userRef);
    yield put(
      signinSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(signinFailure(error));
  }
}

///////////////////////////SignUp Code////////////////////////////////

function* signUpSuccess({ payload: { userAuth, additionalData } }) {
  yield authenticateUser(userAuth, additionalData);
}

function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield createUserWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    yield put(
      signupSuccess({ userAuth: user, additionalData: { displayName } })
    );
  } catch (error) {
    yield put(signupFailure(error));
  }
}

///////////////////////////SignIn and SignOut Code//////////////////////////////

function* signInWithGoogle() {
  try {
    const { user } = yield signInWithPopup(authInstance, googleProvider);
    yield authenticateUser(user);
  } catch (error) {
    yield put(signinFailure(error));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield signInWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    yield authenticateUser(user);
  } catch (error) {
    yield put(signinFailure(error));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield authenticateUser(userAuth);
  } catch (error) {
    yield put(signinFailure(error));
  }
}

function* signOut() {
  try {
    yield authInstance.signOut();
    yield put(signoutSuccess());
  } catch (error) {
    yield put(signoutFailure(error));
  }
}

///////////////////////////Sagas/////////////////////////////////////////

function* onGoogleSignIn() {
  yield takeLatest(UserTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

function* onEmailSignIn() {
  yield takeLatest(UserTypes.EMAIL_SIGNIN_START, signInWithEmail);
}

function* onCheckUserSession() {
  yield takeLatest(UserTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

function* onSignOut() {
  yield takeLatest(UserTypes.SIGNOUT_START, signOut);
}

function* onSignUp() {
  yield takeLatest(UserTypes.SIGNUP_START, signUp);
}

function* onSignUpSuccess() {
  yield takeLatest(UserTypes.SIGNUP_SUCCESS, signUpSuccess);
}

function* userSagas() {
  yield all([
    call(onGoogleSignIn),
    call(onEmailSignIn),
    call(onCheckUserSession),
    call(onSignOut),
    call(onSignUp),
    call(onSignUpSuccess),
  ]);
}

export default userSagas;
