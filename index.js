// TASK ONE: FAHRENHEIT TO CELCISU CONVERSION
function convertFahrToCelsius(fahrenheit) {

    let fahrToCel = (fahrenheit - 32) * 5 / 9;

    if (Array.isArray(fahrenheit)) {

        return (`${JSON.stringify(fahrenheit)} is not a valid number but a/an array`)

    } else if (isNaN(fahrenheit) || typeof (fahrenheit) === "boolean") {

        return (`${JSON.stringify(fahrenheit)} is not a valid number but a/an ${typeof (fahrenheit)}.`)

    } else {

        return fahrToCel.toFixed(4);
    }

}

console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({ temp: 0 }));

// TASK ONE END


//TASK TWO

function checkYuGiOh(n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            array.push('yu-gi-oh')
        } else if (i % 2 === 0 && i % 3 === 0) {
            array.push('yu-gi')
        } else if (i % 2 === 0 && i % 5 === 0) {
            array.push('yu-oh')
        } else if (i % 3 === 0 && i % 5 === 0) {
            array.push('gi-oh')
        } else if (i % 2 === 0) {
            array.push('yu')
        } else if (i % 3 === 0) {
            array.push('gi')
        } else if (i % 5 === 0) {
            array.push('oh')
        } else {
            array.push(i)
        }
    }
    if (isNaN(n)) {
        return (`invalid parameter: "${n}"`)
    }
    return array;
}
console.log(checkYuGiOh(20));
console.log(checkYuGiOh("Fizzbuzz is meh"));

//TASKK TWO END