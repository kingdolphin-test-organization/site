import React from "react";
import {observer} from "mobx-react";

import {useInfoStores} from "shared/data/infoContext";
import {useItemNavStores} from "./context";

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
export const ItemNav = observer(({config}: Props) => {
    const {itemNavStore: store} = useItemNavStores();
    const {infoStore} = useInfoStores();

    return (
    <>
        { // Hide tab if the circuit is locked
        !infoStore.isLocked &&
            <div className={`tab ${store.isOpen ? "tab__closed" : ""}`}
                 title="Circuit Components"
                 onClick={() => store.toggle()}></div>
        }
        <nav className={`itemnav ${store.isOpen ? "" : "itemnav__move"}`}>
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
});

