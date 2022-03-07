import { Component } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { setCurrentUser } from "./redux/user/user-actions";
import { selectCurrentUser } from "./redux/user/user-selector";

import {
   onAuthStateChanged,
   authInstance,
   createUserProfileDocument,
} from "./firebase/firebase.utils";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import SignInAndSignUpPage from "./pages/signin-and-signup-page/signinandsignuppage";
import CheckoutPage from "./pages/checkoutPage/checkout.component";

import "./App.css";

class App extends Component {
   unsubFromAuth = null;
   componentDidMount() {
      this.unsubFromAuth = onAuthStateChanged(
         authInstance,
         async (userAuth) => {
            if (userAuth) {
               const userDetails = await createUserProfileDocument(userAuth);
               this.props.setCurrentUser({
                  ...userDetails.data(),
                  id: userDetails.id,
               });
            } else {
               this.props.setCurrentUser(userAuth);
            }
         }
      );
   }

   componentWillUnmount() {
      this.unsubFromAuth();
   }

   render() {
      const { currentUser } = this.props;
      return (
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="shop" element={<ShopPage />} />
               <Route
                  path="signin"
                  element={
                     currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />
                  }
               />
               <Route path="checkout" element={<CheckoutPage />} />
            </Routes>
         </BrowserRouter>
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
