import {ContainerState, ContainerDispatches} from "./store";


export type ContainerReducersType = {
    [K in keyof ContainerDispatches]: (state: ContainerState, ...args: Parameters<ContainerDispatches[K]>) => ContainerState
}
export const ContainerReducers: ContainerReducersType = {
    setEnabled: (state: ContainerState, enabled = true) => {
        return {
            ...state,
            isEnabled: enabled
        };
    },
    open: (state: ContainerState) => {
        return {
            ...state,
            isOpen: true
        };
    },
    close: (state: ContainerState) => {
        return {
            ...state,
            isOpen: false
        };
    },
    toggle: (state: ContainerState) => {
        return {
            ...state,
            isOpen: !state.isOpen
        };
    }
}
