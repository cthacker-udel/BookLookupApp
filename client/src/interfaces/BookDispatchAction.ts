import { State } from "./State";

export interface BookDispatchAction {
    type: string
    payload: State
};