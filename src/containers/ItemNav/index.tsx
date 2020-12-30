import React, {useContext} from "react";

import {MainContext, ItemNavContext} from "shared/contexts";

import "./style.scss";

export type ItemNavConfig = {
    imgRoot: string;
    sections: {
        id: string;
        label: string;
        items: {
            id: string;
            label: string;
            icon: string;
        }[];
    }[];
}

type Props = {
    config: ItemNavConfig;
}
export const ItemNav = ({config}: Props) => {
    const {circuitInfo} = useContext(MainContext);
    const {isOpen, toggle} = useContext(ItemNavContext);

    const {isLocked} = circuitInfo;

    return (
    <>
        { // Hide tab if the circuit is locked
        !isLocked &&
            <div className={`tab ${isOpen ? "tab__closed" : ""}`}
                 title="Circuit Components"
                 onClick={() => toggle()}></div>
        }
        <nav className={`itemnav ${isOpen ? "" : "itemnav__move"}`}>
            {config.sections.map((section) =>
                <React.Fragment key={`itemnav-section-${section.id}`}>
                    <h4>{section.label}</h4>
                    {section.items.map((item) =>
                        <button key={`itemnav-section-${section.id}-item-${item.id}`}>
                            <img src={`/${config.imgRoot}/${section.id}/${item.icon}`} alt={item.label} />
                            <br />
                            {item.label}
                        </button>
                    )}
                </React.Fragment>
            )}
        </nav>
    </>
    );
};

