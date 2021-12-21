import React from "react";
import { State } from "../../interfaces/State";
import { StateContext } from "../context.producers/StateContext";


export const UseStateContext = (): {state: State} => {

    const state = React.useContext(StateContext);
    if (state === undefined) {
        throw new Error("Unable to use State context");
    }
    return state;

}