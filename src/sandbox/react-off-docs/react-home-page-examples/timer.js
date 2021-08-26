import React, {Component} from "react";

class Timer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1e3);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {
        return (
            <span>
                {this.state.seconds}
            </span>
        );
    }
}

export {Timer};
