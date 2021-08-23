function tryToConvert (temperatureStr, converter) {
    const temperature = parseFloat(temperatureStr);

    if (Number.isNaN(temperature)) {
        return "";
    }

    const converted = converter(temperature);
    const rounded = Math.round(converted * 1e3) / 1e3;
    return rounded.toString();
}

export {tryToConvert};
