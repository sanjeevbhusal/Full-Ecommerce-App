import SignUp from "../../components/sign-up-form/signupform.component";
import SignIn from "../../components/signin-form/signinform.componenet";

import "./signinandsignuppage.styles.scss";

const SignInAndSignUpPage = () => {
   return (
      <div className="sign-in-and-sign-up">
         <SignIn />
         <SignUp />
      </div>
   );
};

export default SignInAndSignUpPage;
