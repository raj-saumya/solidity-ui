import React from "react";
import styled from "styled-components";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddQuestion from "../components/AddQuestion";
import ViewQuestions from "../components/ViewQuestions";

const useStyles = makeStyles(theme => ({
  hDivider: {
    margin: "16px 0 24px 0",
    background: "#1c292c"
  },
  vDivider: {
    height: "100%",
    background: "#1c292c",
    margin: "0 24px"
  }
}));

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 80px);
  background: #faf9f9;
  padding: 40px;
`;

const HeadLabel = styled.h1`
  font-size: 24px;
  color: #1d282d;
  margin: 0;
`;

const QuestionSection = styled.div`
  display: flex;
  height: 100%;
`;

const Questionaire = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      <div>
        <HeadLabel>Solidity Questionaire</HeadLabel>
        <Divider className={classes.hDivider} />
      </div>
      <div style={{ flex: 1 }}>
        <QuestionSection>
          <div>
            <AddQuestion />
          </div>
          <div>
            <Divider
              className={classes.vDivider}
              orientation="vertical"
              flexItem
            />
          </div>
          <div style={{ width: "100%" }}>
            <ViewQuestions />
          </div>
        </QuestionSection>
      </div>
    </Wrapper>
  );
};

export default Questionaire;
