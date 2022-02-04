function farenheitToCelcius(farenheit) {
    let celcius = (5 * farenheit - 160) / 9;
    return celcius;
}
const todayFarenheit = 84.2;
const getFarenheit = farenheitToCelcius(todayFarenheit);
console.log("Today temperature is", getFarenheit, "degree celcius");