/*
 * @Descripttion:
 * @version:
 * @Author: CYZ
 * @Date: 2022-10-11 09:54:33
 * @LastEditors: CYZ
 * @LastEditTime: 2023-05-17 20:31:31
 */
type actionType =
    | "add"
    | "del"
    | "increment"
    | "decrement"

export interface State {
    [key: string | symbol]: any;
}

export interface Action {
    type: actionType;
    data?:  any;
}
export interface UseContextType {
    state: State;
    dispatch: (action: Action) => void;
}
