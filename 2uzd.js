// Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.

function findMax(numbers){
    if (Array.isArray(numbers)){
        let max = numbers[0];
        for (number of numbers){
            if (max < number){
                max = number;
            }
        }
    return max;
    } else {
        return "Negalimi duomenys";
    }

}

console.log(findMax([5, 2, 3, 5, 7, 2 -99, 12]));