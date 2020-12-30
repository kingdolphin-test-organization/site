import React, {useContext} from "react";

import {SideNavContext} from "shared/contexts";

import "./style.scss";

export const Overlay = () => {
    const {isOpen, toggle} = useContext(SideNavContext);

    return (
        <div className={`overlay ${isOpen ? "" : "invisible"}`}
             onClick={() => toggle()}></div>
    );
};