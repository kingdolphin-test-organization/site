import {action, observable} from "mobx";

export class InfoStore {
    @observable isSaved: boolean = false;
    @observable isLocked: boolean = false;
    @observable circuitName: string = "Untitled Circuit";

    @action save(): void {
        this.isSaved = true;
    }

    @action toggleLocked(): void {
        this.isLocked = !this.isLocked;
    }
}
