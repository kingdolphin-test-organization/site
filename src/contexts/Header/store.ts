
export type HeaderMenu = "none" | "download" | "tutorial";
export type HeaderState = {
    curMenu: HeaderMenu;
}

export type HeaderDispatches = {
    openMenu: (menu: Exclude<HeaderMenu, "none">) => void;
    closeMenus: () => void;
}

export type HeaderStore = HeaderState & HeaderDispatches;
