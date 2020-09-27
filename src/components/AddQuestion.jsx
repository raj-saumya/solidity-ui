import React, { useState, useContext } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";
import { CTX } from "../utils/Store";

const useStyles = makeStyles(theme => ({
  chip: {
    margin: "24px 12px 0 0",
    padding: "4px",
    color: "#1c292c",
    background: "#fff",
    boxShadow: "inset 0 2px 4px 0 #00000038"
  }
}));

const DeleteIcon = styled.img`
  width: 10px !important;
  padding-right: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubHeader = styled.label`
  font-size: 12px;
  color: #1d282d;
  font-weight: bold;
`;

export const Input = styled.input`
  background: #fff;
  padding: 12px 16px;
  text-decoration: none;
  outline: none;
  width: 360px;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  box-shadow: inset 0 2px 4px 0 #00000038;
`;

const Button = styled.button`
  width: 96px;
  background: #1d282d;
  color: #faf9f9;
  border-radius: 4px;
  border: none;
  padding: 12px 16px;
  place-self: flex-end;
  cursor: pointer;
`;

const AddQuestion = () => {
  const { dispatch } = useContext(CTX);

  const [question, setQuestion] = useState("");
  const [choice, setChoice] = useState("");
  const [answer, setAnswer] = useState("");
  const [choices, setChoices] = useState([]);
  const classes = useStyles();

  return (
    <Wrapper>
      <SubHeader>Enter the question.</SubHeader>
      <div className="h-2x"></div>
      <Input
        type="text"
        value={question}
        onChange={e => setQuestion(e.target.value)}
      ></Input>
      <div className="h-3x"></div>
      <SubHeader>Enter choices.</SubHeader>
      <div className="h-2x"></div>
      <Input
        type="text"
        value={choice}
        onChange={e => setChoice(e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter") {
            setChoices([...choices, choice]);
            setChoice("");
          }
        }}
      ></Input>
      <div className="2x"></div>
      <div>
        {choices.map((chip, i) => {
          return (
            <Chip
              key={i}
              label={chip}
              deleteIcon={
                <DeleteIcon
                  src={require("../assets/delete.svg")}
                  alt="delete-chip"
                />
              }
              onDelete={() => setChoices(choices.filter(d => d !== chip))}
              className={classes.chip}
            />
          );
        })}
      </div>
      <div className="h-3x"></div>
      <SubHeader>Enter Answer.</SubHeader>
      <div className="h-2x"></div>
      <Input
        type="text"
        value={answer}
        onChange={e => setAnswer(e.target.value)}
      ></Input>
      <div className="h-5x"></div>
      <Button
        onClick={() => {
          dispatch({
            type: "ADD_QUESTION",
            payload: { question: question + " ?", choices, answer }
          });
          setQuestion("");
          setChoice("");
          setChoices([]);
          setAnswer("");
        }}
      >
        Add
      </Button>
    </Wrapper>
  );
};

export default AddQuestion;
