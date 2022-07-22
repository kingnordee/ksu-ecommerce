import {ICart, IProduct, IUser} from "./common";
import {combineReducers} from "redux";

export type StateType = {
    currentUser: IUser | null,
    cartArray: ICart[]
}
const initialState: StateType = {
    currentUser: null,
    cartArray: []
}

export type PAYLOAD = IUser |  IProduct;

export enum TYPE {
    SetUser = "SetUser",
    AddItem = "AddItem"
}

export interface IAction {
    type: string,
    payload: PAYLOAD
}

export const reducer = (
    state: StateType = initialState,
    action: IAction
) => {
    switch (action.type) {
        case TYPE.SetUser :
            return {...state, currentUser: action.payload} as StateType;
        case TYPE.AddItem:
            return {...state, cartArray: [...state.cartArray, action.payload]} as StateType;
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    storeData: reducer
});
