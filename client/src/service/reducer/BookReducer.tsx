import { State } from "../../interfaces/State";
import { BookDispatchAction } from "../../interfaces/BookDispatchAction";
import produce from "immer";

export const BookReducer = (state: State, action: BookDispatchAction) => {

    switch (action.type) {

        case "addBook": {
            return produce(state, (draft) => {
                draft.books = [...draft.books, action.payload.addedBook];
            });
        }
        default: {
            return state;
        }

    }

}
