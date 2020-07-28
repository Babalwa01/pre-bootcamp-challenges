function testSixtyFive (num1, num2) {

    if ((num1 == 65) || (num2 == 65) || (num1 + num2 == 65)) {
        return true;
    }
    else {
        return false;
    }
}

// calls function testSixtyFive and print results in console - testing
console.log(testSixtyFive(64, 1)); //prints true
console.log(testSixtyFive(1, 4)); //prints false
console.log(testSixtyFive(65, 7)); //prints true