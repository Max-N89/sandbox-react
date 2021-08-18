import React from "react";

export default function (props) {
    return (
        <p>It is {props.date.toLocaleTimeString()}.</p>
    );
}
