import React from "react";

import "./style.scss";

export const SelectionPopup = () => {
    return (
        <div className="selectionpopup" tabIndex={-1}>
            <input id="popup-name" type="text" value="Name :" alt="Name of object(s)"/>
            <hr/>
            <div id="popup-pos-text">Position
                <label id="popup-position-label" unselectable="on" disabled>
                    <input id="popup-position-x" type="number" step="0.5" alt="X-Position of object(s)"/>
                    <input id="popup-position-y" type="number" step="0.5" alt="Y-Position of object(s)"/>
                </label>
            </div>
            <div id="popup-input-count-text">Input Count
                <label id="popup-input-count-label" unselectable="on" disabled>
                    <input id="popup-input-count" type="number" step="1" alt="Number of inputs object(s) have"/>
                </label>
            </div>
            <div id="popup-output-count-text">Output Count
                <label id="popup-output-count-label" unselectable="on" disabled>
                    <input id="popup-output-count" type="number" step="1" alt="Number of outputs object(s) have"/>
                </label>
            </div>
            <div id="popup-color-text">Color
                <label id="popup-color-label" unselectable="on" disabled>
                    <input id="popup-color-picker" type="color" value="#ffffff" alt="Color of object(s)"/>
                </label>
            </div>
            <div id="popup-clock-delay-text" class="hide">Clock Delay
                <label id="popup-clock-delay-label" unselectable="on" disabled>
                    <input id="popup-clock-delay" type="number" value="1000" min="200" max="10000" step="100"
                        alt="Clock delay in milliseconds"/>
                </label>
            </div>
            <div id="popup-segment-count-text">Segment Count
                <label id="popup-segment-count-text" unselectable="on" disabled>
                    <select id="popup-segment-count">
                        <option value="7">7</option>
                        <option value="9">9</option>
                        <option value="14">14</option>
                        <option value="16">16</option>
                    </select>
                </label>
            </div>

            <button id="popup-ic-button" type="button" title="Create">Create IC</button>
            <button id="popup-ic-viewer-button" type="button" title="Create">View IC</button>
            <button id="popup-bus-button" type="button" title="Create a bus between selected ports">Bus</button>
        </div>
    );
}