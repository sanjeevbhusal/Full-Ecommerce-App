import { Component } from "react";
import { connect } from "react-redux";

import {
  authInstance,
  createUserWithEmailAndPassword,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

import InputField from "../input-field/input-field.component";
import CustomButton from "../custom-button/custom-button.component";

import { signupStart } from "../../redux/user/user-actions";

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
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password Doesnot Match.");
      return;
    }

    //Creates a user with those credintials.
    await signUpStart({ email, password, displayName });
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

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCred) => dispatch(signupStart(userCred)),
});

export default connect(null, mapDispatchToProps)(SignUp);
