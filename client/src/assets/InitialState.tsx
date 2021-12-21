import { State } from "../interfaces/State";

export const InitialState: State = {
    books: [],
    addedBook: {
        author: "",
        title: "",
        publishDate: "",
        isbn: 0,
        subject: "",
        publisher: ""
    }
};
