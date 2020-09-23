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

const CreateAccount = ({ setSignInView }) => {
  const { dispatch } = useContext(CTX);

  return (
    <Wrapper>
      <Header>Create Account</Header>
      <Wrapper>
        <AlignStart>
          <InputLabel>Enter Username</InputLabel>
        </AlignStart>
        <Input type="text" />
        <AlignStart>
          <InputLabel>Set Password</InputLabel>
        </AlignStart>
        <Input type="password" />
        <Button>Sign Up</Button>
      </Wrapper>
      <FooterLabel>
        Already have an account?
        <ActiveLink onClick={() => setSignInView(true)}>Sign In</ActiveLink>
      </FooterLabel>
    </Wrapper>
  );
};

export default CreateAccount;
