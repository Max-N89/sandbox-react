import React, {Component, Fragment} from "react";

import "./lens.css";

import contractURL from "../assets/images/contract.svg";
import expandURL from "../assets/images/expand.svg";

class Lens extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false
        };

        this.handleContractExpand = this.handleContractExpand.bind(this);
    }

    handleContractExpand() {
        this.setState(prevState => ({
            isExpanded: !prevState.isExpanded
        }));
    }

    render() {
        const {
            handleContractExpand
        } = this;

        const {
            isExpanded
        } = this.state;

        const {
            children
        } = this.props;

        return (
            <div className={`lens ${isExpanded? "expanded" : "contracted"}`}>
                <div className="lens-plug">
                    <img
                        className="contract-expand"
                        alt={`four arrows pointing ${isExpanded? "inward" : "outward"}`}
                        src={isExpanded? contractURL : expandURL}
                        onClick={handleContractExpand}
                    />
                </div>
                <div className="lens-focus">
                    {children}
                </div>
            </div>
        );
    }
}

export {Lens};
