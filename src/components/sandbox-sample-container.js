import React, {Component} from "react";

import contractSVGSrc from "../assets/contract.svg";
import expandSVGSrc from "../assets/expand.svg";

class SandboxSampleContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false
        };

        this.handleExpandContract = this.handleExpandContract.bind(this);
    }

    handleExpandContract() {
        this.setState(prevState => ({
            isExpanded: !prevState.isExpanded
        }));
    }

    render() {
        const {title, children} = this.props;
        const {isExpanded} = this.state;

        return (
            <section className={`sandbox-sample-container ${isExpanded? "expanded" : "contracted"}`}>
                <header>
                    <h3>{title}</h3>
                    <img
                        alt={`four arrows pointing ${isExpanded? "inward" : "outward"}`}
                        onClick={this.handleExpandContract}
                        src={isExpanded? contractSVGSrc : expandSVGSrc}
                    />
                </header>
                <div className="lens">
                    <div className="sandbox-sample">
                        {children}
                    </div>
                </div>
            </section>
        );
    }
}

export {SandboxSampleContainer};
