// Function that calculates triangle area and returns area
function calcTriangleArea(num1, num2, num3) {

    var semiPerimeter = 0.5 * (num1 + num2 + num3);
    var area = Math.sqrt(semiPerimeter * (semiPerimeter - num1) * (semiPerimeter - num2) * (semiPerimeter - num3))
    console.log(area);

}

// calling the above function with 3 lengths as inputs
calcTriangleArea(1, 2, 2);