import React from "react";
import ReactDOM from "react-dom";

export default function tick(containerID) {
    const element = (
        <div>
            <h2>Hello, world!</h2>
            <p>It is {new Date().toLocaleTimeString()}.</p>
        </div>
    );

    ReactDOM.render(element, document.getElementById(containerID));
}
