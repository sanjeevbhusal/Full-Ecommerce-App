import { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { setCurrentUser } from "./redux/user/user-actions";
import { selectCurrentUser } from "./redux/user/user-selector";
import { selectShopData } from "./redux/shop/shop-selector";

import {
  onAuthStateChanged,
  authInstance,
  createUserProfileDocument,
  onSnapshot,
  addCollectionAndDocuments,
} from "./firebase/firebase.utils";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import SignInAndSignUpPage from "./pages/signin-and-signup-page/signinandsignuppage";
import CheckoutPage from "./pages/checkoutPage/checkout.component";
import CollectionPage from "./pages/collection/collection.component";

import "./App.css";

class App extends Component {
  unsubFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubFromAuth = onAuthStateChanged(authInstance, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />}>
            <Route path=":productId" element={<CollectionPage />}></Route>
          </Route>
          <Route
            path="signin"
            element={
              currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />
            }
          />
          <Route path="checkout" element={<CheckoutPage />} />
        </Routes>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
