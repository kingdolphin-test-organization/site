
export type ContainerState = {
    isEnabled: boolean;
    isOpen: boolean;
}

export type ContainerDispatches = {
    setEnabled: (enabled?: boolean) => void;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

export type ContainerStore = ContainerState & ContainerDispatches;
