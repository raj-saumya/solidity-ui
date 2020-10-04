import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { CTX } from "../utils/Store";

const Wrapper = styled.div`
  display: flex;
  z-index: 999;
  padding: 16px 24px;
  background: #1d282d;
  box-shadow: 0 6px 12px -2px #0000008c;
  justify-content: space-between;
  align-items: center;
`;

const LinkWrapper = styled(Link)`
  color: #faf9f9;
  text-decoration: none;
`;

const Header = () => {
  const location = useLocation();
  const { state } = useContext(CTX);

  return location.pathname !== "/login" ? (
    <Wrapper>
      <LinkWrapper to="/">Project Solidity</LinkWrapper>
      <LinkWrapper to="/login">
        {state.account.login ? "Sign Out" : "Sign In"}
      </LinkWrapper>
    </Wrapper>
  ) : null;
};

export default Header;
