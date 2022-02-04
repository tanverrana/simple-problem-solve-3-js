function examResult(number) {
    if (number >= 80) {
        return console.log("Great!! A+");
    }
    else if (number >= 70 && number < 80) {
        return console.log("Good!! you are A grade");
    }
    else {
        return console.log("Do hard work , your number is very low.");
    }
}
const myNumber = 65;
examResult(myNumber);