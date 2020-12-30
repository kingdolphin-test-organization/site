import React, {createContext, useState} from "react";

import {GetDispatches} from "../utils/reducers";
import {ContainerDispatches, ContainerState} from "../Container/store";
import {ContainerReducers} from "../Container/reducers";


export type SideNavState = ContainerState;
export type SideNavDispatches = ContainerDispatches
export type SideNavStore = SideNavState & SideNavDispatches;

export const initialSideNavState: SideNavState = {
    isEnabled: true,
    isOpen: false
};

export const SideNavContext = createContext<SideNavStore>(undefined as SideNavStore);
export function SideNavContextProvider({ children }) {
    const [state, setState] = useState(initialSideNavState);

    const dispatches = GetDispatches(state, setState, ContainerReducers) as SideNavDispatches;

    const value = {
        ...state,
        ...dispatches
    };

    return <SideNavContext.Provider value={value}>
        {children}
    </SideNavContext.Provider>
}
