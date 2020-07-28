function printVowels(str) {             //function that searches for vowels in a string and prints them on the console

    // declaration of variable assigned to a regular expression that defines only uppercase and lowercase vowels
    var reg = /[aeiouAEIOU]/ig;
    // creates an array of characters that match the above regex
    var strArray = str.match(reg);
    // prints the output to the console
    console.log(strArray);
}

// function call and testing
printVowels("Babalwa");
printVowels("MBOLEKWA");
printVowels("BabALWa");