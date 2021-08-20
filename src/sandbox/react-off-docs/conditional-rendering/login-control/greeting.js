import React from "react";

import UserGreeting from "./user-greeting";
import GuestGreetin from "./guest-greeting";

export default function (props) {
    const {isLoggedIn} = props;

    if (isLoggedIn) {
        return <UserGreeting/>;
    }

    return <GuestGreetin/>
};
