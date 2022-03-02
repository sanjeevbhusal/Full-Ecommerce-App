import { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./signupform.styles.scss";

import {
   authInstance,
   createUserWithEmailAndPassword,
   createUserProfileDocument,
} from "../../firebase/firebase.utils";

class SignUp extends Component {
   constructor() {
      super();
      this.state = {
         displayName: "",
         email: "",
         password: "",
         confirmPassword: "",
      };
   }

   handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   };

   handleSubmit = async (event) => {
      event.preventDefault();
      const { displayName, email, password, confirmPassword } = this.state;

      if (password !== confirmPassword) {
         alert("Password Doesnot Match.");
         return;
      }

      //Create a user with those credintials.
      try {
         const { user } = await createUserWithEmailAndPassword(
            authInstance,
            email,
            password
         );

         await createUserProfileDocument(user, { displayName });

         this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
         });
      } catch (error) {
         console.log("Error", error);
      }
   };

   render() {
      const { displayName, email, password, confirmPassword } = this.state;
      return (
         <div className="sign-up-container">
            <h2>I donot have an account</h2>
            <span> Create an account</span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
               <FormInput
                  type="text"
                  name="displayName"
                  label="Display Name"
                  value={displayName}
                  onChange={this.handleChange}
                  required
               />
               <FormInput
                  type="email"
                  name="email"
                  label="Email"
                  value={email}
                  onChange={this.handleChange}
                  required
               />
               <FormInput
                  type="password"
                  name="password"
                  label="Password"
                  value={password}
                  onChange={this.handleChange}
                  required
               />
               <FormInput
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                  value={confirmPassword}
                  onChange={this.handleChange}
                  required
               />
               <CustomButton type="submit"> Sign-Up</CustomButton>
            </form>
         </div>
      );
   }
}

export default SignUp;
