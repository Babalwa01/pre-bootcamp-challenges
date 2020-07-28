function printCommonChars(str1, str2) {

    // convert the string to an array of lowercase characters and assigns them to a declared variable
    var string1 = str1.toLowerCase().split('');
    var string2 = str2.toLowerCase().split('');
    // declares an empty array
    var strArray = [];

    for (var i = 0; i < string1.length; i++) {
        if (string2.indexOf(string1[i]) >= 0) {
            strArray.push(string1[i]);
        }
    }
    // prints out common characters to the console
    console.log(strArray);
}
// function call - testing
printCommonChars("Boding", "bootcamping");