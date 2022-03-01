import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { onAuthStateChanged, authInstance } from "./firebase/fireabase.utils";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import SignInForm from "./components/signin-form/signinform.componenet";
import "./App.css";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         currentUser: null,
      };
   }

   componentDidMount() {
      this.unsubFromAuth = onAuthStateChanged(authInstance, (user) =>
         this.setState({ currentUser: user })
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
               <Route path="/signin/" element={<SignInForm />} />
            </Routes>
         </BrowserRouter>
      );
   }
}

export default App;
