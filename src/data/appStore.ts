import {CircuitMetadata} from "core/models/CircuitMetadata";
import {observable} from "mobx";

declare type AuthInfo = string;

declare type CircuitInfo = {
    name: string;
    isSaved: boolean;
    isLocked: boolean;
}

export class AppStore {
    @observable auth: AuthInfo;
    @observable circuitInfo: CircuitInfo;
    @observable userCircuits: CircuitMetadata[];

    header
}


let storeInstance: AppStore;

export function InitStore(store: AppStore): void {
    storeInstance = store;
}

export function GetStore(): AppStore {
    return storeInstance;
}