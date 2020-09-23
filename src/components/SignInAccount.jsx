import React, { useContext } from "react";
import styled from "styled-components";
import { CTX } from "../utils/Store";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  align-items: center;
  height: 100%;
`;

const Input = styled.input`
  padding: 12px 16px;
  text-decoration: none;
  outline: none;
  width: 360px;
  font-size: 18px;
  border-radius: 4px;
  border: none;
  margin-bottom: 40px;
`;

const Button = styled.button`
  width: 360px;
  background: #1d282d;
  color: #faf9f9;
  border-radius: 4px;
  border: none;
  padding: 12px 16px;
  place-self: center;
`;

const AlignStart = styled.div`
  align-self: self-start;
  padding-bottom: 8px;
`;

const Header = styled.h1`
  font-size: 40px;
  color: #faf9f9;
  margin-bottom: 72px;
`;

const InputLabel = styled.label`
  font-size: 20px;
  color: #faf9f9;
`;

const FooterLabel = styled.label`
  font-size: 16px;
  color: #faf9f9;
  margin-top: auto;
`;

const SignInAccount = () => {
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
      <FooterLabel onClick={() => dispatch({ type: "LOGIN", payload: false })}>
        Don't have an account? <b>Create here.</b>
      </FooterLabel>
    </Wrapper>
  );
};

export default SignInAccount;
