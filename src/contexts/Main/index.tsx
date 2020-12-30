import React, {createContext, useState} from "react";

import {GetDispatches} from "../utils/reducers";
import {MainStore, MainState, MainDispatches} from "./store";
import {MainReducers} from "./reducers";


const initialMainState: MainState = {
    auth: "",
    circuitInfo: {
        name: "",
        isSaved: false,
        isLocked: false
    },
    userCircuits: []
};

export const MainContext = createContext<MainStore>(undefined as MainStore);
export function MainContextProvider({ children }) {
    const [state, setState] = useState(initialMainState);

    const dispatches = GetDispatches(state, setState, MainReducers) as MainDispatches;

    const value = {
        ...state,
        ...dispatches
    };

    return <MainContext.Provider value={value}>
        {children}
    </MainContext.Provider>
}
