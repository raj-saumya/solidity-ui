import React, { useContext } from "react";
import { CTX } from "../utils/Store";
import styled from "styled-components";
import ViewQuestionCard from "./ViewQuestionCard";
import { Button } from "../Shared/custom-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  height: calc(100vh - 240px);
  padding: 8px 4px 0px 4px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = styled.label`
  font-size: 16px;
  color: #1d282d;
  font-weight: bold;
`;

const SaveBtn = styled(Link)`
  width: fit-content;
  padding: 8px 16px;
  background: #2e7d32;
  color: #faf9f9;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  place-self: center;
  text-decoration: none;
`;

const ViewQuestions = () => {
  const { state } = useContext(CTX);

  return (
    <React.Fragment>
      <HeaderWrapper>
        <Header>All Questions</Header>
        <SaveBtn to="/">Save</SaveBtn>
      </HeaderWrapper>
      <Wrapper>
        {state.questions.map((d, i) => (
          <div key={i}>
            <ViewQuestionCard
              question={d.question}
              choices={d.choices}
              answer={d.answer}
            />
            <div className="h-2x"></div>
          </div>
        ))}
      </Wrapper>
    </React.Fragment>
  );
};

export default ViewQuestions;
