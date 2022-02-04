function leapYear(year) {
    if (year % 4 == 0) {

        return console.log("This is a leap year");
    }
    else {

        return console.log("This is not a leap year");
    }
}
const myYear = 2028;
const isMyLeapyear = leapYear(myYear);
//console.log(myYear, "This is a leap year", isMyLeapyear);