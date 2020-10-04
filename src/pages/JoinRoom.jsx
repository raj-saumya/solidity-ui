import React, { useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { Route, Switch } from "react-router-dom";
import Room from "../components/Room";
import { CTX } from "../utils/Store";
import { Redirect } from "react-router-dom";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f5f9;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubHeader = styled.label`
  font-size: 12px;
  font-weight: bold;
  place-self: start;
`;

const Input = styled.input`
  padding: 12px 16px;
  text-decoration: none;
  outline: none;
  width: 360px;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 4px 24px -8px #bcc5d2;
`;

const Button = styled.button`
  background: #1d282d;
  color: #faf9f9;
  border-radius: 4px;
  border: none;
  font-size: 12px;
  padding: 10px 16px;
  place-self: flex-end;
  cursor: pointer;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Connecting = styled.img`
  height: 32px;
  width: 32px;
  place-self: center;
  animation: ${rotate} 2.5s linear infinite;
`;

const EnterRoomId = ({
  history,
  roomId,
  handleRoomId,
  connect,
  handleConnectStatus
}) => {
  return (
    <InputSection>
      <SubHeader>Enter Room ID</SubHeader>
      <div className="h-2x"></div>
      <Input value={roomId} onChange={e => handleRoomId(e.target.value)} />
      <div className="h-4x"></div>
      {connect ? (
        <Connecting src={require("../assets/connecting.svg")} />
      ) : (
        <Button
          onClick={() => {
            handleConnectStatus(true);
            console.log(roomId);
            setTimeout(() => {
              history.push(`/joinQuiz/${roomId}`);
            }, 1000);
          }}
        >
          Connect
        </Button>
      )}
      <div className="h-4x"></div>
    </InputSection>
  );
};

const JoinRoom = () => {
  const [roomId, setRoomId] = useState("");
  const [connect, setConnectStatus] = useState(false);
  const { state } = useContext(CTX);

  if (!state.account.login) {
    return <Redirect push to="/login" />;
  }

  return (
    <Wrapper>
      <Switch>
        <Route
          exact
          path="/joinQuiz"
          render={props => {
            return (
              <EnterRoomId
                {...props}
                roomId={roomId}
                handleRoomId={setRoomId}
                connect={connect}
                handleConnectStatus={setConnectStatus}
              />
            );
          }}
        />
        <Route path="/joinQuiz/:id" component={Room} />
      </Switch>
    </Wrapper>
  );
};

export default JoinRoom;
