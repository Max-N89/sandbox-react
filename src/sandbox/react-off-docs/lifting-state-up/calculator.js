import React, {Component} from "react";

import {tryToConvert} from "./supplements/try-to-convert";
import {toCelsius, toFahrenheit} from "./supplements/temperature-converters";

import BoilingVerdict from "./boiling-verdict";
import TemperatureInput from "./temperature-input";

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            temperatureStr: "",
            scale: "c"
        };

        // this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        // this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);

        this.handleCelsiusChange = this.handleTemperatureChange.bind(this, "c");
        this.handleFahrenheitChange = this.handleTemperatureChange.bind(this, "f");
    }

    // handleCelsiusChange(e) {
    //     this.setState({
    //         temperatureStr: e.target.value,
    //         scale: "c"
    //     });
    // }

    // handleFahrenheitChange(e) {
    //     this.setState({
    //         temperatureStr: e.target.value,
    //         scale: "f"
    //     })
    // }

    handleTemperatureChange(scale, e) {
        this.setState({
            temperatureStr: e.target.value,
            scale
        });
    }

    render() {
        const {temperatureStr, scale} = this.state;
        const celsiusStr = scale === "c" ? temperatureStr : tryToConvert(temperatureStr, toCelsius);
        const fahrenheitStr = scale === "f" ? temperatureStr : tryToConvert(temperatureStr, toFahrenheit);

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperatureStr={celsiusStr}
                    onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput
                    scale="f"
                    temperatureStr={fahrenheitStr}
                    onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict celsius={parseInt(celsiusStr)}/>
            </div>
        );
    }
};
