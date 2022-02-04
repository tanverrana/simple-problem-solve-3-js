function oddNumber(number) {
    let even = number % 2;
    if (even == 0) {
        return console.log(number, "is a even number");
    }
    else {
        return console.log(number, "is a odd number");
    }
}
const myNumber = 49;
oddNumber(myNumber);