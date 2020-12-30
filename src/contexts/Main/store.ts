import {CircuitMetadata} from "core/models/CircuitMetadata";


export type MainState = {
    auth: string;
    circuitInfo: {
        name: string;
        isSaved: boolean;
        isLocked: boolean;
    };
    userCircuits: CircuitMetadata[];
}

export type MainDispatches = {
    setCircuitName: (name: string) => void;
    setSaved: (saved?: boolean) => void;
    setLocked: (locked?: boolean) => void;
    toggleLocked: () => void;
    addUserCircuit: (circuit: CircuitMetadata) => void;
    removeUserCircuit: (i: number) => void;
}

export type MainStore = MainState & MainDispatches;
