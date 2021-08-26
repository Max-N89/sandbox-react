import React, {Component} from "react";

import {FormattedDate} from "./formatted-date";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date
        }
        this.intervalID = null;
        // this.tick = this.tick.bind(this);
    }

    tick() {
        this.setState({date: new Date});
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1e3);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
        this.intervalID = null;
    }

    render() {
        return (
            <div>
                <h2>Hello, world!</h2>
                <FormattedDate date={this.state.date}/>
            </div>
        );
    }
}

export {Clock};
