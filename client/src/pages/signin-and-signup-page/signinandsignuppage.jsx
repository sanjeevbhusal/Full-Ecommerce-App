import SignUp from "../../components/sign-up-form/signupform.component";
import SignIn from "../../components/signin-form/signinform.componenet";

import { SignInAndSignUpContainer } from "./signinandsignuppage.styles";

const SignInAndSignUpPage = () => {
   return (
      <SignInAndSignUpContainer>
         <SignIn />
         <SignUp />
      </SignInAndSignUpContainer>
   );
};

export default SignInAndSignUpPage;
