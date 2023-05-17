import { Action, State } from "../typings";

/*
 * @Descripttion:
 * @version:
 * @Author: CYZ
 * @Date: 2022-10-09 17:12:37
 * @LastEditors: CYZ
 * @LastEditTime: 2023-05-18 00:55:32
 */
const state = {
  userList: [
    {
      key: 1,
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: 2,
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ],
  count: 0,
};
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "add":
      if (state.userList.find((item: any) => item.name == action.data.name))
        return state;
      const length = state.userList.length;
      const obj = { key: state.userList[length - 1].key + 1, ...action.data };
      state = JSON.parse(JSON.stringify(state));
      state.userList.push(obj);
      return state;
    case "del":
      const userList = state.userList.filter(
        (item: any) => item.key !== action.data.key
      );
      return { ...state, userList: JSON.parse(JSON.stringify(userList)) };
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
export default {
  state,
  reducer,
};
