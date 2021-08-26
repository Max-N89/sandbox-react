import React from "react";

import {UserGreeting} from "./user-greeting";
import {GuestGreeting} from "./guest-greeting";

function Greeting(props) {
    const {isLoggedIn} = props;

    if (isLoggedIn) {
        return <UserGreeting/>;
    }

    return <GuestGreeting/>
}

export {Greeting};
