import React, { useContext } from "react";
import { CTX } from "../utils/Store";
import styled from "styled-components";
import ViewQuestionCard from "./ViewQuestionCard";
import { Link } from "react-router-dom";
import api from "../Shared/api";
import { useHistory } from "react-router-dom";

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

const SaveBtn = styled.button`
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
  const { state, dispatch } = useContext(CTX);
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      const resp = await api.accountService().submitQuiz(
        { quizQuestions: [] },
        {
          headers: {
            Authorization: "Token " + state.account.token
          }
        }
      );
      console.log("resp", resp.data);
      dispatch({ type: "SET_ROOM_ID", payload: resp.data.room_id });
      history.push(`/joinQuiz/${resp.data.room_id}`);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <React.Fragment>
      <HeaderWrapper>
        <Header>All Questions</Header>
        <SaveBtn onClick={handleSubmit}>Save</SaveBtn>
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
