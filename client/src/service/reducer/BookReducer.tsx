import { State } from "../../interfaces/State";
import { BookDispatchAction } from "../../interfaces/BookDispatchAction";
import produce from "immer";

export const BookReducer = (state: State, action: BookDispatchAction) => {

    switch (action.type) {

        default: {
            return state;
        }

    }


}
