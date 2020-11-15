import React from "react";

import {AppStore} from "./appStore";

const AppContext = React.createContext({
    store: undefined as AppStore
});

export const AppStoreProvider = ({ children, store }) => (
    <AppContext.Provider value={store}>{children}</AppContext.Provider>
);

export const useAppStore = () => React.useContext(AppContext);

export const withStore = (Component) => (props) => (
    <Component {...props} store={useAppStore()} />
);
