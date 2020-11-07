import React from "react";
import {observer} from "mobx-react";

import {useSiteStores} from "../../../data/siteContext";

import "./style.scss";

export const HeaderLeft = observer(() => {
    const {headerStore, sideNavStore} = useSiteStores();

    const {isLocked, circuitName, isSaved} = headerStore;

    return (
        <div className="header__left">
            <div>
                <span title="Side Bar" role="button" tabIndex={0}
                      onClick={() => sideNavStore.toggle()}>&#9776;</span>
            </div>
            <div>
                <button className="header__left__lock"
                        title="Lock/Unlock Editing"
                        onClick={() => headerStore.toggleLock()}>
                    <img src="img/icons/lock_open.svg" className={isLocked ? "hide" : ""} alt="Icon for unlocked lock" />
                    <img src="img/icons/lock.svg"      className={isLocked ? "" : "hide"} alt="Icon for lock" />
                </button>
            </div>
            <div>
                <input title="Circuit Name" type="text"
                       value={circuitName}
                       onChange={(s) => headerStore.circuitName = s.target.value}
                       alt="Name of project" />
            </div>
            <div>
                <button className={`header__left__save ${isSaved ? "invisible" : ""}`}
                        title="Save the circuit remotely"
                        onClick={() => headerStore.save()}>Save</button>
            </div>
        </div>
    );
});