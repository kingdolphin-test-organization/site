import {action, observable} from "mobx";

export class HeaderStore {
    @observable isSaved: boolean = false;
    @observable isLocked: boolean = false;
    @observable circuitName: string = "Untitled Circuit";

    @observable isDownloadMenuOpen: boolean = false;
    @observable isTutorialMenuOpen: boolean = false;

    @action save(): void {
        this.isSaved = true;
    }

    @action toggleLock(): void {
        this.isLocked = !this.isLocked;
    }
}
