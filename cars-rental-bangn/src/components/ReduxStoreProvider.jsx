"use client";
import React from "react";
import store from "@/redux/store";
import { Provider } from "react-redux";
import "@/stylesSheets/commonClasses.css";
import "@/stylesSheets/customClasses.css";

function ReduxStoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxStoreProvider;
