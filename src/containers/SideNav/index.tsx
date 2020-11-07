import React from "react";
import {observer} from "mobx-react";

import {CircuitMetadata} from "core/models/CircuitMetadata";
import {RemoteController} from "../../controllers/RemoteController";

import {useSiteStores} from "../../data/siteContext";

import "./style.scss";

type SideCircuitProps = {
    readonly?: boolean;
    data: CircuitMetadata;
    onClick: () => void;
}
const SideCircuit = ({readonly, data, onClick}: SideCircuitProps) => (
    <div className="sidenav__circuit" title="Load circuit" onClick={onClick}>
        <span className="sidenav__circuit__icon">
            <img src={data.getThumbnail()} alt={`Thumbnail for example circuit, ${data.getName()}`} />
        </span>
        <span className="sidenav__circuit__text">
                <div className="sidenav__circuit__text__name">{data.getName()}</div>
                <div className="sidenav__circuit__text__desc">{data.getDesc()}</div>
        </span>
        {/* Don't show 'x' if readonly */}
        {!readonly &&
        <span className="sidenav__circuit__controls">
            <img className="circuit_options" width="20px" src="img/icons/close-24px.svg" title="Delete Circuit" alt={`X to delete `} />
        </span>}
    </div>
);

type Props = {
    circuits: CircuitMetadata[];
    examples: CircuitMetadata[];
    onCircuitLoad: (contents: string) => void;
}
export const SideNav = observer(({circuits, examples, onCircuitLoad}: Props) => {
    const {sideNavStore} = useSiteStores();

    return (
        <div className={`sidenav ${sideNavStore.isOpen ? "" : "sidenav__move"}`}>
            <div className="sidenav__accountinfo"></div>
            <div className="sidenav__content">
                <h4 unselectable="on">My Circuits</h4>
                <div>
                {circuits.map((circuit, i) =>
                    <SideCircuit key={`sidenav-user-circuit-${i}`}
                                data={circuit}
                                onClick={() => RemoteController.LoadUserCircuit(circuit, onCircuitLoad)} />
                )}
                </div>
                <h4 unselectable="on">Examples</h4>
                <div>
                {examples.map((example, i) =>
                    <SideCircuit key={`sidenav-example-circuit-${i}`}
                                readonly data={example}
                                onClick={() => RemoteController.LoadExampleCircuit(example, onCircuitLoad)} />
                )}
                </div>
                <div className="sidenav__content__footer">
                    A program made with love by <a href="http://leonmontealeg.re/" target="_blank" rel="noopener noreferrer">Leon Montealegre </a>
                    and our great <a href="https://www.github.com/OpenCircuits/OpenCircuits/blob/master/AUTHORS.md" target="_blank" rel="noopener noreferrer">team</a>
                </div>
            </div>
        </div>
    )
});
