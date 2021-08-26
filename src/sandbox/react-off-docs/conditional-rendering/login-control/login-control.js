import React, {Component} from "react";

import {LoginButton} from "./login-button";
import {LogoutButton} from "./logout-button";
import {Greeting} from "./greeting";

class LoginControl extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        });
    }

    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        });
    }

    render() {
        const {isLoggedIn} = this.state;
        let button = isLoggedIn ?
            <LogoutButton onClick={this.handleLogoutClick}/> :
            <LoginButton onClick={this.handleLoginClick}/>;

        return (
            <section>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </section>
        );
    }
}

export {LoginControl};
