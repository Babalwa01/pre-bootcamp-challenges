// variable declaration
var sum = 0;

// For loop to iterate from 0 to 999
for (let i = 0; i < 1000; i++) {

    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}

// prints out sum of all multiples
console.log(sum);