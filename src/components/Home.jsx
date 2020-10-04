import React, { useContext } from "react";
import { CTX } from "../utils/Store";
import { Redirect } from "react-router-dom";

const Home = ({ history }) => {
  const { state } = useContext(CTX);

  return (
    <React.Fragment>
      {state.account.login ? <div>Home</div> : <Redirect push to="/login" />}
    </React.Fragment>
  );
};

export default Home;
