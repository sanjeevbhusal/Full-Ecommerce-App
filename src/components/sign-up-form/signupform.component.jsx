import { Component } from "react";

import {
   authInstance,
   createUserWithEmailAndPassword,
   createUserProfileDocument,
} from "../../firebase/firebase.utils";

import InputField from "../input-field/input-field.component";
import CustomButton from "../custom-button/custom-button.component";

import {
   SignUpContainer,
   FormContainer,
   Title,
   Description,
} from "./signupform.styles";

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

      //Creates a user with those credintials.
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
         <SignUpContainer>
            <Title>I donot have an account</Title>
            <Description> Create an account</Description>
            <FormContainer onSubmit={this.handleSubmit}>
               <InputField
                  type="text"
                  name="displayName"
                  label="Display Name"
                  value={displayName}
                  onChange={this.handleChange}
                  required
               />
               <InputField
                  type="email"
                  name="email"
                  label="Email"
                  value={email}
                  onChange={this.handleChange}
                  required
               />
               <InputField
                  type="password"
                  name="password"
                  label="Password"
                  value={password}
                  onChange={this.handleChange}
                  required
               />
               <InputField
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                  value={confirmPassword}
                  onChange={this.handleChange}
                  required
               />
               <CustomButton type="submit"> Sign-Up</CustomButton>
            </FormContainer>
         </SignUpContainer>
      );
   }
}

export default SignUp;
