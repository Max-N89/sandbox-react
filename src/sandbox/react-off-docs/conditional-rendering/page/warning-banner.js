import React from "react";

export default function (props) {
    if (!props.warn) {
        return null;
    }

    return (
        <p className="warning">
            Warning!
        </p>
    );
};
