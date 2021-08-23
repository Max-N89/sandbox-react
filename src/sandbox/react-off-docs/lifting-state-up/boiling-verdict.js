import React from "react";

export default function (props) {
    const {celsius} = props;

    if (celsius >= 100) {
        return (
            <p>
                The water would boil.
            </p>
        );
    }

    return (
        <p>
            The water would NOT boil.
        </p>
    );
};
