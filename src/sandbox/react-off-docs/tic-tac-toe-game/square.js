import React from "react";

function Square(props) {
    const classNames = ["square"];

    if (props.current) classNames.push("highlighted-green");
    if (props.winning) classNames.push("highlighted-red");

    return (
        <button
            className={classNames.join(" ")}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

export {Square};
