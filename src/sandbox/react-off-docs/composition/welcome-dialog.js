import React from "react";

import {Dialog} from "./dialog";

function WelcomeDialog () {
    return (
        <Dialog
            title="Welcome"
            message="Thank you for visiting my sandbox."
            borderColor="blue"
        />
    );
}

export {WelcomeDialog};
