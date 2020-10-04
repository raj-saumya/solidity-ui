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

const CreateAccount = ({ setSignInView }) => {
  const { dispatch } = useContext(CTX);
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const resp = await api.accountService().signUp({ username, password });
      const resp2 = await api.accountService().signIn({ username, password });
      dispatch({
        type: "LOGIN",
        payload: {
          login: true,
          token: resp2.data.auth_token
        }
      });
      history.push("/");
    } catch (error) {
      console.log("error", error.response.data);
    }
  };

  return (
    <Wrapper>
      <Header>Create Account</Header>
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
          <InputLabel>Set Password</InputLabel>
        </AlignStart>
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button onClick={handleSignUp}>Sign Up</Button>
      </Wrapper>
      <FooterLabel>
        Already have an account?
        <ActiveLink onClick={() => setSignInView(true)}>Sign In</ActiveLink>
      </FooterLabel>
    </Wrapper>
  );
};

export default CreateAccount;
