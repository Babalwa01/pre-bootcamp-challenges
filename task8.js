function convertTime(num) {

    // variable declaration and initialization. Also converts number to hours and minutes
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    
    var time = hours + " hour(s), " + minutes + " minute(s)"; 
    console.log(time);
}

// calls the above function with input
convertTime(71);