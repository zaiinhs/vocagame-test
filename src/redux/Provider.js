"use client";
import { store } from "./store";
import { Provider } from "react-redux";
import Wrapper from "./Wrapper";

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <Wrapper>{children}</Wrapper>
    </Provider>
  );
};

export default ReduxProvider;
