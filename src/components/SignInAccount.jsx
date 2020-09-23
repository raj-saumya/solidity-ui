import React, { useContext } from "react";
import { CTX } from "../utils/Store";
import {
  Wrapper,
  Header,
  Input,
  AlignStart,
  InputLabel,
  Button,
  FooterLabel,
  ActiveLink
} from "../Shared/custom-components";

const SignInAccount = ({ setSignInView }) => {
  const { dispatch } = useContext(CTX);

  return (
    <Wrapper>
      <Header>Existing Account</Header>
      <Wrapper>
        <AlignStart>
          <InputLabel>Enter Username</InputLabel>
        </AlignStart>
        <Input type="text" />
        <AlignStart>
          <InputLabel>Enter Password</InputLabel>
        </AlignStart>
        <Input type="password" />
        <Button>Sign In</Button>
      </Wrapper>
      <FooterLabel>
        Don't have an account?
        <ActiveLink onClick={() => setSignInView(false)}>Sign Up</ActiveLink>
      </FooterLabel>
    </Wrapper>
  );
};

export default SignInAccount;
