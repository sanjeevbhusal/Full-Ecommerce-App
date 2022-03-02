import { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
   firestoreDatabase,
   doc,
   getDoc,
   signInWithGoogle,
   signInWithEmailAndPassword,
   authInstance,
} from "../../firebase/firebase.utils";

import "./signinform.styles.scss";
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
