function maxNumber(num1, num2, num3) {

    // declaration of an empty variable representing maximum number
    var maxNumber;

    // conditional statements comparing values of num1, num2 and num3
    if (num1 > num2 && num1 > num3) {
        maxNumber = num1;
    }
    else if (num2 > num1 && num2 > num3) {
        maxNumber = num2;
    }
    else {
        maxNumber = num3;
    }
    return console.log(maxNumber);
}

// Calls function maxNumber with three number inputs
maxNumber(8, 3, 5);