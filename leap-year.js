function isLeapyear(year) {
    if ((year % 4 == 0) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    }
    else {
        return false;
    }
}
const myYear = 2100;
const isMyLeapyear = isLeapyear(myYear);
console.log(myYear, "is a leapyear", isMyLeapyear);