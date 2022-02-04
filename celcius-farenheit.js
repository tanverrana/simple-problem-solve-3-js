function celciusToFarenheit(celcius) {
    let farnheit = (9 * celcius + 160) / 5;
    return farnheit;
}
const todayCelcius = 29;
const getCelcius = celciusToFarenheit(todayCelcius);
console.log("Today Temperature is ", getCelcius, "degreee farenheit");