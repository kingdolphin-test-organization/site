import React from "react";

type Props = {
    open: boolean;
    btnInfo: {
        title: string;
        src: string;
    }
}
export class Dropdown extends React.Component<Props> {
    public render(): JSX.Element {
        const {open, btnInfo} = this.props;

        return (
            <div className="header__right__dropdown">
                <button className={`header__right__dropdown__button ${open ? "white" : ""}`} title={btnInfo.title}>
                    <img src={btnInfo.src} height="100%" alt={btnInfo.title} />
                </button>
                <div className={`header__right__dropdown__content ${open ? "" : "hide"}`}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
