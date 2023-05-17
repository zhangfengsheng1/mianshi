/*
 * @Descripttion:
 * @version:
 * @Author: CYZ
 * @Date: 2023-05-17 20:28:10
 * @LastEditors: CYZ
 * @LastEditTime: 2023-05-17 21:35:21
 */
/*
 * @Descripttion:
 * @version:
 * @Author: CYZ
 * @Date: 2022-10-08 15:33:31
 * @LastEditors: CYZ
 * @LastEditTime: 2023-05-17 20:29:27
 */
import { createContext } from "react";
import formModule from "./modules/form";

import { Action, State } from "./typings";
export const initialState = {
  form: formModule.state,
};
const combineReducers = (reducers: any) => {
  return (state: State, action: Action) => {
    return Object.keys(reducers).reduce((nextState: any, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};

export const reducer = combineReducers({
  form: formModule.reducer,
});

export const MyContext = createContext({} as any);
