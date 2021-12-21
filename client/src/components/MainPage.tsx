import React, { useReducer } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainPanel } from "./panels/MainPanel";
import { DispatchContext } from "../service/context.producers/DispatchContext";
import { StateContext } from "../service/context.producers/StateContext";
import { BookReducer } from "../service/reducer/BookReducer";
import { InitialState } from "../assets/InitialState";
import { AddBookPanel } from "./panels/AddBookPanel";
import { BookTablePanel } from "./panels/BookTablePanel";

export const MainPage = (): JSX.Element => {
    
    const [state, dispatch] = useReducer(BookReducer, InitialState);

    const dispatchValue = { dispatch };
    const stateValue = { state };

    return(
        <BrowserRouter>
            <DispatchContext.Provider value={dispatchValue}>
                <StateContext.Provider value={stateValue}>
                    <Routes>

                        <Route path="book" element={
                            <MainPanel />
                        }>
                            <Route path="book-table" element={<BookTablePanel />} />
                            <Route path="add-book" element={<AddBookPanel />} />
                            <Route path="remove-book" element={<>Hello There</>} />
                        </Route>
                        <Route path="/" element={
                            <Navigate to="book" />
                        }>
                        </Route>

                    </Routes>
                </StateContext.Provider>
            </DispatchContext.Provider>
        
        </BrowserRouter>
    );

};