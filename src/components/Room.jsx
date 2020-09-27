import React, { useState } from "react";
import styled from "styled-components";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  divider: {
    background: "#D4E1F3"
  }
}));

const Wrapper = styled.div`
  display: flex;
  height: calc(100% - 128px);
  width: 100%;
  padding: 64px;
`;

const QuestionSection = styled.div`
  flex: 2;
`;

const PeerSection = styled.div`
  flex: 1;
`;

const QuestionCard = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 4px 24px -8px #bcc5d2;
`;

const ChoicesCard = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 24px -8px #bcc5d2;
`;

const Choices = styled.div`
  padding: 32px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;

const Room = () => {
  const classes = useStyles();
  const [answer, setAnswer] = useState(0);

  return (
    <Wrapper>
      <QuestionSection>
        <QuestionCard>This is a queston</QuestionCard>
        <div className="h-5x"></div>
        <ChoicesCard>
          {[1, 2, 3, 4].map((d, i) => (
            <div key={i}>
              <Choices
                style={{
                  background: answer === `Option ${d}` ? "#96B7DE" : "#fff"
                }}
                onClick={e => setAnswer(e.target.innerText)}
              >
                Option {d}
              </Choices>
              <Divider className={classes.divider} />
            </div>
          ))}
        </ChoicesCard>
      </QuestionSection>
      <div className="w-3x"></div>
      <PeerSection>
        <QuestionCard>Connected: 4</QuestionCard>
      </PeerSection>
    </Wrapper>
  );
};

export default Room;
