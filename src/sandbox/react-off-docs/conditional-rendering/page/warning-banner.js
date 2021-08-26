import React from "react";

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <p className="warning">
            Warning!
        </p>
    );
}

export {WarningBanner};
