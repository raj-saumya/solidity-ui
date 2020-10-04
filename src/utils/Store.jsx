import React, { createContext, useReducer } from "react";

const initialState = {
  account: {
    login: false
  },
  questions: []
};

export const CTX = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, account: action.payload };
    case "ADD_QUESTION":
      return { ...state, questions: [...state.questions, action.payload] };
    case "SET_ROOM_ID":
      return { ...state, roomId: action.payload };
    default:
      return state;
  }
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CTX.Provider value={{ state, dispatch }}>{children}</CTX.Provider>;
};

export default Store;
