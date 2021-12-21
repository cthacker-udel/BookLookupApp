import React, { useReducer } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPanel } from "./panels/MainPanel";
import { DispatchContext } from "../service/context.producers/DispatchContext";
import { StateContext } from "../service/context.producers/StateContext";
import { BookReducer } from "../service/reducer/BookReducer";
import { InitialState } from "../assets/InitialState";

export const MainPage = (): JSX.Element => {
    
    const [state, dispatch] = useReducer(BookReducer, InitialState);

    const dispatchValue = { dispatch };
    const stateValue = { state };

    return(
        <BrowserRouter>
        
            <Routes>

                <Route path="/" element={
                    <DispatchContext.Provider value={dispatchValue}>
                        <StateContext.Provider value={stateValue}>
                            <MainPanel />
                        </StateContext.Provider>
                    </DispatchContext.Provider>
                } />
                <Route path="/add-book" element={<></>} />

            </Routes>
        
        </BrowserRouter>
    );

};