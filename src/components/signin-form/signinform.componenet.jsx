import { Component } from "react";
import InputField from "../input-field/input-field.component";
import CustomButton from "../custom-button/custom-button.component";

import {
   firestoreDatabase,
   doc,
   getDoc,
   signInWithGoogle,
   signInWithEmailAndPassword,
   authInstance,
} from "../../firebase/firebase.utils";

import {
   SignInContainer,
   FormContainer,
   Title,
   Description,
   ButtonGroup,
} from "./signinform.styles";

class SignIn extends Component {
   state = {
      email: "",
      password: "",
   };

   handleSubmit = async (event) => {
      const { email, password } = this.state;
      event.preventDefault();

      //get a reference to the user stored in authentication.

      try {
         const { user } = await signInWithEmailAndPassword(
            authInstance,
            email,
            password
         );

         //get the users details stored in firestsore based on that storred users uid.

         const userRef = doc(firestoreDatabase, "users", user.uid);
         const userDetails = await getDoc(userRef);

         const data = userDetails.data();

         console.log({ ...data, id: userDetails.id });

         this.setState({ email: "", password: "" });
      } catch (error) {
         console.log("error", error);
      }
   };

   handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   };

   render() {
      return (
         <SignInContainer>
            <Title>I already have an account</Title>
            <Description>Signin with your email and Password</Description>

            <FormContainer onSubmit={this.handleSubmit}>
               <InputField
                  type="email"
                  name="email"
                  label="email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
               />

               <InputField
                  type="password"
                  name="password"
                  label="password"
                  value={this.state.password}
                  onChange={this.handleChange}
               />
               <ButtonGroup>
                  <CustomButton type="submit">Sign In</CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleButton>
                     Sign In With Google
                  </CustomButton>
               </ButtonGroup>
            </FormContainer>
         </SignInContainer>
      );
   }
}

export default SignIn;
