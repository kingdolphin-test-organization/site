import React, {useContext} from "react";

import {MainContext, SideNavContext, ItemNavContext} from "shared/contexts";

import "./style.scss";

export const HeaderLeft = () => {
    const {circuitInfo, setCircuitName, toggleLocked, setSaved} = useContext(MainContext);
    const itemNav = useContext(ItemNavContext);
    const sideNav = useContext(SideNavContext);

    const {name, isSaved, isLocked} = circuitInfo;

    return (
        <div className="header__left">
            <div>
                <span title="Side Bar" role="button" tabIndex={0}
                      onClick={() => sideNav.toggle()}>&#9776;</span>
            </div>
            <div>
                <button className="header__left__lock"
                        title="Lock/Unlock Editing"
                        onClick={() => {
                            itemNav.close();
                            toggleLocked();
                        }}>
                    <img src="img/icons/lock_open.svg" className={isLocked ? "hide" : ""} alt="Icon for unlocked lock" />
                    <img src="img/icons/lock.svg"      className={isLocked ? "" : "hide"} alt="Icon for lock" />
                </button>
            </div>
            <div>
                <input title="Circuit Name" type="text"
                       value={name}
                       placeholder="Untitled Circuit*"
                       onChange={(s) => setCircuitName(s.target.value)}
                       alt="Name of project" />
            </div>
            <div>
                <button className={`header__left__save ${isSaved ? "invisible" : ""}`}
                        title="Save the circuit remotely"
                        onClick={() => setSaved()}>Save</button>
            </div>
        </div>
    );
};