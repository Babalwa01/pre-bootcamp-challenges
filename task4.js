function testThree(num1, num2) {

    // declaration and assigning of variables
    var sumOfNumbers = num1 + num2;

    // conversion of sum of the 2 numbers to a string
    var sumOfNumbersString = sumOfNumbers.toString();

    //conditional statements
    if ((num1 == 3 || num2 == 3) && (sumOfNumbersString.search('3') !== -1)) {
        return true;
    }
    else {
        return false;
    }
}

// testing of the function output
console.log(testThree(31, 3));
console.log(testThree(3, 36));