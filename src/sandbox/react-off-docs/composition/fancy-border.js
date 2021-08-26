import React from "react";

import "./fancy-border.css";

function FancyBorder(props) {
    return (
        <div
            className={`fancy-border fancy-border-${props.color}`}
        >
            {props.children}
        </div>
    );
}

export {FancyBorder};
