import React, {Component} from "react";

import {Dialog} from "./dialog";

class SignUpDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleChange(e) {
        this.setState({
            login: e.target.value
        });
    }

    handleSignUp(e) {
        e.preventDefault();
        console.log(`Welcome aboard, ${this.state.login}.`);
    }

    render() {
        return (
            <Dialog
                borderColor="blue"
                title="Mars Exploration Program"
                message="How should we refer to you?"
            >
                <form onSubmit={this.handleSignUp}>
                    <input
                        type="text"
                        value={this.state.login}
                        onChange={this.handleChange}
                    />
                    <input
                        type="submit"
                        value="Sign Up"
                    />
                </form>

            </Dialog>
        );
    }
}

export {SignUpDialog};
