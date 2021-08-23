import React from "react";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

export default function (props) {
    const {
        scale,
        temperatureStr,
        onTemperatureChange
    } = props;

    return (
        <fieldset>
            <legend>
                Enter temperature in {scaleNames[scale]}:
            </legend>
            <input value={temperatureStr}
                   onChange={onTemperatureChange} />
        </fieldset>
    );
};

// class TemperatureInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//     }
//
//     handleChange(e) {
//         this.props.onTemperatureChange(e.target.value);
//     }
//
//     render() {
//         const {temperatureStr, scale} = this.props;
//
//         return (
//             <fieldset>
//                 <legend>Enter temperature in {scaleNames[scale]}:</legend>
//                 <input value={temperatureStr}
//                        onChange={this.handleChange} />
//             </fieldset>
//         );
//     }
// }
