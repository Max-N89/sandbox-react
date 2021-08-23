import React from "react";

import "./fancy-border.css";

export default function (props) {
    return (
        <div
            className={`fancy-border fancy-border-${props.color}`}
        >
            {props.children}
        </div>
    );
};
