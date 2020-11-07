import React from "react";

import {ContainerStore} from "shared/data/stores/containerStore";

export const itemNavContext = React.createContext({
    itemNavStore: new ContainerStore()
});

export const useItemNavStores = () => React.useContext(itemNavContext);
