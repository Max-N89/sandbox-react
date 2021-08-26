import React from "react";

function FormattedDate(props) {
    return (
        <p>It is {props.date.toLocaleTimeString()}.</p>
    );
}

export {FormattedDate};
