import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
   onAuthStateChanged,
   authInstance,
   firestoreDatabase,
   collection,
   createUserProfileDocument,
} from "./firebase/firebase.utils";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import SignInAndSignUpPage from "./pages/signin-and-signup-page/signinandsignuppage";
import "./App.css";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         currentUser: null,
      };
   }

   unsubFromAuth = null;

   componentDidMount() {
      this.unsubFromAuth = onAuthStateChanged(
         authInstance,
         async (userAuth) => {
            if (userAuth) {
               const userDetails = await createUserProfileDocument(userAuth);

               this.setState({
                  currentUser: {
                     ...userDetails.data(),
                     id: userDetails.id,
                  },
               });
            } else {
               this.setState({ currentUser: userAuth });
            }
         }
      );
   }

   componentWillUnmount() {
      this.unsubFromAuth();
   }

   render() {
      return (
         <BrowserRouter>
            <Header currentUser={this.state.currentUser} />
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/shop/" element={<ShopPage />} />
               <Route path="/signin/" element={<SignInAndSignUpPage />} />
            </Routes>
         </BrowserRouter>
      );
   }
}

export default App;
