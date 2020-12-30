import React, {useContext} from "react";

import {HeaderContext} from "shared/contexts";
import {Dropdown} from "./Dropdown";

import "./style.scss";


export const TutorialDropdown = () => {
    const {curMenu, openMenu, closeMenus} = useContext(HeaderContext);

    return (
        <Dropdown open={(curMenu === "tutorial")}
                  onClick={() => openMenu("tutorial")}
                  onClose={() => closeMenus()}
                  btnInfo={{title: "Help", src: "img/icons/help.svg"}}>
            <h1>Tours</h1>
            <hr/>
            <div className="disabled">
                <img src="img/icons/tour_general.svg" height="100%" alt="Take a tour of OpenCircuits"/>
                <a>General Tour</a>
            </div>
            <h1>Resources</h1>
            <hr/>
            <div>
                <img src="img/icons/quick_start.svg" height="100%" alt="Check out our Quick Start guide"/>
                <a>Quick Start</a>
            </div>
            <div className="disabled">
                <img src="img/icons/video_tutorials.svg" height="100%" alt="Check out our Video Tutorials"/>
                <a>Video Tutorials</a>
            </div>
            <div className="disabled">
                <img src="img/icons/user_guide.svg" height="100%" alt="Read our User Guide"/>
                <a>OpenCircuits User Guide</a>
            </div>
            <div className="disabled">
                <img src="img/icons/help_center.svg" height="100%" alt="Check out our Help Center"/>
                <a>Help Center</a>
            </div>
            <div>
                <img src="img/icons/keyboard.svg" height="100%" alt="See our Keyboard Shortcuts"/>
                <a>Keyboard Shortcuts</a>
            </div>
        </Dropdown>
    );
}

export const OpenFileButton = () => {
    const fileInput = React.useRef(null);

    return (
        <div>
            <input type="file" ref={fileInput} multiple={false} accept=".circuit,.json" style={{display: "none"}} />
            <button type="button" title="Open file" onClick={() => fileInput.current.click()}>
                <img src="img/icons/open.svg" height="100%" alt="Open a file"/>
            </button>
        </div>
    );
}

export const DownloadMenuDropdown = () => {
    const {curMenu, openMenu, closeMenus} = useContext(HeaderContext);

    return (
        <Dropdown open={(curMenu === "download")}
                  onClick={() => openMenu("download")}
                  onClose={() => closeMenus()}
                  btnInfo={{title: "Download current scene", src: "img/icons/download.svg"}}>
            <div title="Download circuit locally">
                <img src="img/icons/download.svg" height="100%" alt="Download current scene"/>
                <a>Download</a>
            </div>
            <div title="Save circuit as PDF">
                <img src="img/icons/pdf_download.svg" height="100%" alt="Download current scene as PDF"/>
                <a>Download as PDF</a>
            </div>
            <div title="Save circuit as PNG">
                <img src="img/icons/png_download.svg" height="100%" alt="Download current scene as PNG"/>
                <a>Download as PNG</a>
            </div>
        </Dropdown>
    );
}

export const SignInOutButtons = () => (
    <div className="header__right__account">
        <div className="header__right__account__login">
            <button title="Sign in">Sign In</button>
            {/* <span id="header-login-or">or</span>
            <button id="header-createaccount-button"title="Create a new account">Create Account</button> */}
        </div>
        <button className="hide" title="Sign out">Sign Out</button>
    </div>
);

export const HeaderRight = () => {
    return (
        <div className="header__right">
            <TutorialDropdown />
            <OpenFileButton />
            <DownloadMenuDropdown />
            <SignInOutButtons />
        </div>
    );
}
