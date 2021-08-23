import React from "react";

import FancyBorder from "./fancy-border";
import Dialog from "./dialog";

export default function () {
    return (
        <Dialog
            title="Welcome"
            message="Thank you for visiting my sandbox."
            borderColor="blue"
        />
    );
};
