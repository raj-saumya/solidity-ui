import React from "react";
import styled from "styled-components";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  divider: {
    height: "100px",
    width: "1px",
    backgroundImage:
      "linear-gradient(to bottom, #1c292c 60%, rgba(255, 255, 255, 0) 0%)",
    backgroundPosition: "left",
    backgroundSize: " 2px 6px",
    backgroundRepeat: "repeat-y"
  }
}));

const Card = styled.div`
  background: #fff;
  box-shadow: 0 2px 4px 0 #00000038;
  border-radius: 4px;
  padding: 16px;
  display: flex;
`;

const Bullet = styled.div`
  height: 12px;
  width: 12px;
  background: #1d282d;
  border-radius: 2px;
`;

const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 8px;
`;

const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -4px;
`;

const Col2Row = styled.div`
  display: flex;
`;

const Question = styled.label`
  font-size: 14px;
  color: #1d282d;
`;

const CorrectChoice = styled.label`
  font-size: 12px;
  color: #fb6107;
`;

const OtherChoices = styled.label`
  font-size: 12px;
  color: #1d282dd1;
`;

const ViewQuestionCard = ({ question, choices, answer }) => {
  const classes = useStyles();

  return (
    <Card>
      <Col1>
        <div>
          <Bullet />
        </div>
        <div>
          <Divider
            className={classes.divider}
            orientation="vertical"
            flexItem
          />
        </div>
      </Col1>
      <Col2>
        <Question>{question}</Question>
        <div className="h-x2"></div>
        <Col2Row>
          <div className="w-x"></div>
          <div>
            {choices.map((d, i) => (
              <div key={i}>
                {d === answer ? (
                  <CorrectChoice>{d}</CorrectChoice>
                ) : (
                  <OtherChoices>{d}</OtherChoices>
                )}
                <div className="h-x4"></div>
              </div>
            ))}
          </div>
        </Col2Row>
      </Col2>
    </Card>
  );
};

export default ViewQuestionCard;
