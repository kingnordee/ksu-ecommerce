import {combineReducers} from "redux";

export type StateType = {
    userAction: boolean,
    cartAction: boolean
}
const initialState: StateType = {
    userAction: false,
    cartAction: false
}

export enum TYPE {
    SetUser = "SetUser",
    SetCartItem = "SetCartItem"
}

export interface IAction {
    type: string,
    payload: boolean
}

export const reducer = (
    state: StateType = initialState,
    action: IAction
) => {
    switch (action.type) {
        case TYPE.SetUser :
            return {...state, currentUser: action.payload} as StateType;
        case TYPE.SetCartItem:
            return {...state, cartAction: action.payload} as StateType;
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    appData: reducer
});
