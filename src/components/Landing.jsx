import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: #1d282d;
  font-size: 20px;
  font-weight: bold;
  padding: 8px;
`;

const Landing = ({ history }) => {
  return (
    <Wrapper>
      <LinkWrapper to="/questionaire">Create Questionaire</LinkWrapper>
      <LinkWrapper to="/joinQuiz">Join Room</LinkWrapper>
    </Wrapper>
  );
};

export default Landing;
