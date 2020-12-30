import React, {createContext, useState} from "react";

import {GetDispatches} from "../utils/reducers";
import {HeaderStore, HeaderState, HeaderDispatches} from "./store";
import {HeaderReducers} from "./reducers";


export const initialHeaderState: HeaderState = {
    curMenu: "none"
};

export const HeaderContext = createContext<HeaderStore>(undefined as HeaderStore);
export function HeaderContextProvider({ children }) {
    const [state, setState] = useState(initialHeaderState);

    const dispatches = GetDispatches(state, setState, HeaderReducers) as HeaderDispatches;

    const value = {
        ...state,
        ...dispatches
    };

    return <HeaderContext.Provider value={value}>
        {children}
    </HeaderContext.Provider>
}
