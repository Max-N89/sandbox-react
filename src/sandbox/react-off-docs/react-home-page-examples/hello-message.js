import React, {Component} from "react";

class HelloMessage extends Component {
    render() {
        return (
            <h2>
                Hello {this.props.to}
            </h2>
        );
    }
}

export {HelloMessage};
