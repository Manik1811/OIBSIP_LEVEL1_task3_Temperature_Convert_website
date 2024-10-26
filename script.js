
function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value.trim();
    const inputUnit = document.getElementById("unitInput").value;
    const outputUnit = document.getElementById("unitOutput").value;
    const result = document.getElementById("result");

    // Validate input to check if it is a number
    if (temperatureInput === "" || isNaN(temperatureInput)) {
        result.innerHTML = "<span class='error'>Please enter a valid number for temperature.</span>";
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemp;

    // Perform conversion based on selected units
    if (inputUnit === outputUnit) {
        convertedTemp = temperature;
    } else if (inputUnit === "Celsius" && outputUnit === "Fahrenheit") {
        convertedTemp = (temperature * 9/5) + 32;
    } else if (inputUnit === "Celsius" && outputUnit === "Kelvin") {
        convertedTemp = temperature + 273.15;
    } else if (inputUnit === "Fahrenheit" && outputUnit === "Celsius") {
        convertedTemp = (temperature - 32) * 5/9;
    } else if (inputUnit === "Fahrenheit" && outputUnit === "Kelvin") {
        convertedTemp = (temperature - 32) * 5/9 + 273.15;
    } else if (inputUnit === "Kelvin" && outputUnit === "Celsius") {
        convertedTemp = temperature - 273.15;
    } else if (inputUnit === "Kelvin" && outputUnit === "Fahrenheit") {
        convertedTemp = (temperature - 273.15) * 9/5 + 32;
    }

    result.innerHTML = `Converted Temperature: <strong>${convertedTemp.toFixed(2)} °${outputUnit}</strong>`;
}
