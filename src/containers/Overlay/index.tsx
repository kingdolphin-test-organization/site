import React from "react";
import {observer} from "mobx-react";

import {useSiteStores} from "../../data/siteContext";

import "./style.scss";

export const Overlay = observer(() => {
    const {sideNavStore} = useSiteStores();

    return (
        <div className={`overlay ${sideNavStore.isOpen ? "" : "invisible"}`}
             onClick={() => sideNavStore.toggle()}></div>
    );
});