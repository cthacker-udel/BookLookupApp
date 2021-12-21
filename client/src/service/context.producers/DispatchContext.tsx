import React from "react";
import { BookDispatchAction } from "../../interfaces/BookDispatchAction";

export const DispatchContext = React.createContext<{dispatch: React.Dispatch<BookDispatchAction>} | undefined>(undefined);