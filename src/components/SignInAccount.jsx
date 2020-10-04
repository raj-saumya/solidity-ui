import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
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
import api from "../Shared/api";
import { CTX } from "../utils/Store";

const SignInAccount = ({ setSignInView }) => {
  const history = useHistory();
  const { dispatch } = useContext(CTX);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const resp = await api.accountService().signIn({ username, password });
      dispatch({
        type: "LOGIN",
        payload: {
          login: true,
          token: resp.data.auth_token
        }
      });
      history.push("/");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <Wrapper>
      <Header>Existing Account</Header>
      <Wrapper>
        <AlignStart>
          <InputLabel>Enter Username</InputLabel>
        </AlignStart>
        <Input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <AlignStart>
          <InputLabel>Enter Password</InputLabel>
        </AlignStart>
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button onClick={handleSignIn}>Sign In</Button>
      </Wrapper>
      <FooterLabel>
        Don't have an account?
        <ActiveLink onClick={() => setSignInView(false)}>Sign Up</ActiveLink>
      </FooterLabel>
    </Wrapper>
  );
};

export default SignInAccount;
