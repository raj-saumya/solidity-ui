import React, { useContext, useState } from "react";
import styled from "styled-components";
import CreateAccount from "../components/CreateAccount";
import SignInAccount from "../components/SignInAccount";
import { CTX } from "../utils/Store";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const MainWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: 440px;
  min-width: 320px;
  background: #1d282d;
  align-items: center;

  .aboutProject {
    width: 64%;
    height: 64%;
    padding: 40px;
    position: relative;
    background: #e5e6e4;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
    overflow: hidden;
    margin-inline-start: auto;
  }

  .abstract {
    position: absolute;
    bottom: -8px;
    left: 0;
    z-index: 1;
    width: 100%;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex: 2;
  width: 100%;
  background: #faf9f9;
  align-items: center;

  .accountSection {
    width: 80%;
    height: 64%;
    padding: 40px;
    position: relative;
    background: #283d3b;
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
    z-index: 0;
  }

  .accountMonochrome {
    position: absolute;
    top: 24px;
    right: 24px;
    z-index: -1;
    opacity: 0.8;
  }
`;

const TransitionWrapper = styled.div`
  .fade-enter {
    opacity: 0;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in-out;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }
`;

const Login = () => {
  const [signInView, setSignInView] = useState(true);
  const { state } = useContext(CTX);

  return (
    <MainWrapper>
      <LeftWrapper>
        <div className="aboutProject">
          <div className="abstract">
            <img
              style={{ width: "100%" }}
              src={require("../assets/abstract.svg")}
              alt="abstract-vector"
            />
          </div>
          <h1>Solidity</h1>
        </div>
      </LeftWrapper>
      <RightWrapper>
        <div className="accountSection">
          <div className="accountMonochrome">
            <img
              src={require("../assets/account-monochrome.svg")}
              alt="account-vector"
            />
          </div>
          {signInView ? (
            <SignInAccount setSignInView={setSignInView} />
          ) : (
            <CreateAccount setSignInView={setSignInView} />
          )}
        </div>
      </RightWrapper>
    </MainWrapper>
  );
};

export default Login;
