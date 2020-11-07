import {action, observable} from "mobx";

export class ContainerStore {
    @observable isEnabled: boolean = true;
    @observable isOpen: boolean = false;


    @action enable(): void {
        this.isEnabled = true;
    }
    @action disable(): void {
        this.isEnabled = false;
    }


    @action open(): void {
        this.isOpen = true;
    }
    @action close(): void {
        this.isOpen = false;
    }
    @action toggle(): void {
        this.isOpen = !this.isOpen;
    }
}