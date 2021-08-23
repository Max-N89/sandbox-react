import React from "react";

import FancyBorder from "./fancy-border"

export default function (props) {
    return (
        <FancyBorder color={props.borderColor}>
            <h3 className="dialog-title">
                {props.title}
            </h3>
            <p className="dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
};
