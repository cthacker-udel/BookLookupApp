import { DispatchContext } from "../context.producers/DispatchContext";
import React from "react";
import { BookDispatchAction } from "../../interfaces/BookDispatchAction";

export const UseDispatchContext = (): { dispatch: React.Dispatch<BookDispatchAction>} => {

    const dispatch = React.useContext(DispatchContext);
    if (dispatch === undefined) {
        throw new Error("Unable to access dispatch context");
    }
    return dispatch;

}