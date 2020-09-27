import React, { createContext, useReducer } from "react";

const initialState = {
  login: false,
  questions: []
};

export const CTX = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, login: action.payload };
    case "ADD_QUESTION":
      return { ...state, questions: [...state.questions, action.payload] };
    default:
      return state;
  }
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CTX.Provider value={{ state, dispatch }}>{children}</CTX.Provider>;
};

export default Store;
