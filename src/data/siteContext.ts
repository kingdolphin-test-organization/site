import React from "react";

import {HeaderStore} from "../containers/Header/store";
import {ContainerStore} from "./stores/containerStore";

export const siteStoresContext = React.createContext({
    headerStore: new HeaderStore(),
    sideNavStore: new ContainerStore()
});

export const useSiteStores = () => React.useContext(siteStoresContext);
