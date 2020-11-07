import React from "react";

import {InfoStore} from "./infoStore";

export const infoStoresContext = React.createContext({
    infoStore: new InfoStore()
});

export const useInfoStores = () => React.useContext(infoStoresContext);
