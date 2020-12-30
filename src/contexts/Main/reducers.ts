import {MainState, MainDispatches} from "./store";

import {CircuitMetadata} from "core/models/CircuitMetadata";


export type MainReducersType = {
    [K in keyof MainDispatches]: (state: MainState, ...args: Parameters<MainDispatches[K]>) => MainState
}
export const MainReducers: MainReducersType = {
    setCircuitName: (state: MainState, name: string) => {
        return {
            ...state,
            circuitInfo: {
                ...state.circuitInfo,
                name
            }
        };
    },
    setSaved: (state: MainState, saved: boolean = true) => {
        return {
            ...state,
            circuitInfo: {
                ...state.circuitInfo,
                isSaved: saved
            }
        };
    },
    setLocked: (state: MainState, locked: boolean = true) => {
        return {
            ...state,
            circuitInfo: {
                ...state.circuitInfo,
                isLocked: locked
            }
        };
    },
    toggleLocked: (state: MainState) => {
        return {
            ...state,
            circuitInfo: {
                ...state.circuitInfo,
                isLocked: !state.circuitInfo.isLocked
            }
        }
    },
    addUserCircuit: (state: MainState, circuit: CircuitMetadata) => {
        return {
            ...state,
            userCircuits: [...state.userCircuits, circuit]
        };
    },
    removeUserCircuit: (state: MainState, i: number) => {
        return {
            ...state,
            userCircuits: [...state.userCircuits.slice(0, i),
                           ...state.userCircuits.slice(i+1)]
        };
    }
}
