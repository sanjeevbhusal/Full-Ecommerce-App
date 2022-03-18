import { connect } from "react-redux";
import { Component } from "react";
import { googleSigninStart } from "../../redux/user/user-actions";

import InputField from "../input-field/input-field.component";
import CustomButton from "../custom-button/custom-button.component";

import { emailSigninStart } from "../../redux/user/user-actions";

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
    event.preventDefault();
    const { email, password } = this.state;
    const { emailSigninStart } = this.props;

    emailSigninStart(email, password);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSigninStart } = this.props;
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
            <CustomButton
              type="button"
              onClick={googleSigninStart}
              isGoogleButton
            >
              Sign In With Google
            </CustomButton>
          </ButtonGroup>
        </FormContainer>
      </SignInContainer>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  googleSigninStart: () => dispatch(googleSigninStart()),
  emailSigninStart: (email, password) =>
    dispatch(emailSigninStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
