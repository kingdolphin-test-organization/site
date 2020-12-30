import React, {createContext, useState} from "react";

import {GetDispatches} from "../utils/reducers";
import {ContainerDispatches, ContainerState} from "../Container/store";
import {ContainerReducers} from "../Container/reducers";


export type ItemNavState = ContainerState;
export type ItemNavDispatches = ContainerDispatches
export type ItemNavStore = ItemNavState & ItemNavDispatches;

export const initialItemNavState: ItemNavState = {
    isEnabled: true,
    isOpen: false
};

export const ItemNavContext = createContext<ItemNavStore>(undefined as ItemNavStore);
export function ItemNavContextProvider({ children }) {
    const [state, setState] = useState(initialItemNavState);

    const dispatches = GetDispatches(state, setState, ContainerReducers) as ItemNavDispatches;

    const value = {
        ...state,
        ...dispatches
    };

    return <ItemNavContext.Provider value={value}>
        {children}
    </ItemNavContext.Provider>
}
