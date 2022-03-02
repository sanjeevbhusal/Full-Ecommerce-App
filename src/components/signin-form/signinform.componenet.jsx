import { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./signinform.styles.scss";
class SignIn extends Component {
   state = {
      email: "",
      password: "",
   };

   handleSubmit = (event) => {
      event.preventDefault();
      this.setState({ email: "", password: "" });
   };

   handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   };

   render() {
      return (
         <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Signin with your email and Password</span>

            <form onSubmit={this.handleSubmit}>
               <FormInput
                  type="email"
                  name="email"
                  label="email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
               />

               <FormInput
                  type="password"
                  name="password"
                  label="password"
                  value={this.state.password}
                  onChange={this.handleChange}
               />
               <div className="sign-in-buttons">
                  <CustomButton type="submit">Sign In</CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleButton>
                     Sign In With Google
                  </CustomButton>
               </div>
            </form>
         </div>
      );
   }
}

export default SignIn;
