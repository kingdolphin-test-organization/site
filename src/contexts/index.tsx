import React from "react";

import {MainContextProvider} from "./Main";
import {HeaderContextProvider} from "./Header";
import {ItemNavContextProvider} from "./ItemNav";
import {SideNavContextProvider} from "./SideNav";


export {MainContext} from "./Main";
export {HeaderContext} from "./Header";
export {ItemNavContext} from "./ItemNav";
export {SideNavContext} from "./SideNav";

export function SharedContextProvider({ children }) {
    return (
        <MainContextProvider>
        <HeaderContextProvider>
        <ItemNavContextProvider>
        <SideNavContextProvider>
            {children}
        </SideNavContextProvider>
        </ItemNavContextProvider>
        </HeaderContextProvider>
        </MainContextProvider>
    );
}
