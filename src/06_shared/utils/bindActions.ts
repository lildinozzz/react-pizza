import { ActionCreatorsMapObject, bindActionCreators } from "@reduxjs/toolkit";
import { store } from "../../01_app/store/index";

const { dispatch: d } = store;

export const bindActions = <M extends ActionCreatorsMapObject>(
  actionCreator: M
): M => bindActionCreators(actionCreator, d);
