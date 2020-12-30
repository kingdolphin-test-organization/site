import {HeaderMenu, HeaderState, HeaderDispatches} from "./store";


export type HeaderReducersType = {
    [K in keyof HeaderDispatches]: (state: HeaderState, ...args: Parameters<HeaderDispatches[K]>) => HeaderState
}
export const HeaderReducers: HeaderReducersType = {
    openMenu: (state: HeaderState, menu: Exclude<HeaderMenu, "none">) => {
        return {
            ...state,
            curMenu: menu
        };
    },
    closeMenus: (state: HeaderState) => {
        return {
            ...state,
            curMenu: "none"
        };
    }
}
