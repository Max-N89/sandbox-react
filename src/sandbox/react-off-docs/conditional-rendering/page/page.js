import React, {Component} from "react";

import {WarningBanner} from "./warning-banner";

class Page extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showWarning: true
        };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        const {showWarning} = this.state;

        return (
            <section>
                <WarningBanner warn={showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {showWarning? "HIDE WARNING" : "SHOW WARNING"}
                </button>
            </section>
        );
    }
}

export {Page};
