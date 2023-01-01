// // Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
function minMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    return [min, max];
}

// Testing the function
let numbers = [1, 2, 3, 4, 5];
let result = minMax(numbers);
console.log(`Min: ${result[0]}, Max: ${result[1]}`);  // Output: Min: 1, Max: 5


function minMax(arr) {
    let min = arr[0];  // Initially setting the min to the first element of the array
    let max = arr[0];  // Similarly, initially setting the max to the first element of the array

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];  // Updating min if a smaller number is found
        }

        if(arr[i] > max) {
            max = arr[i];  // Updating max if a larger number is found
        }
    }

    return [min, max];
}

// Testing the function
let numbers = [1, 2, 3, 4, 5];
let result = minMax(numbers);
console.log(`Min: ${result[0]}, Max: ${result[1]}`);  // Output: Min: 1, Max: 5
//one two three first