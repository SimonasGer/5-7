// Write a function reverseString that takes a string as input and returns the reverse of that string.

function reverseString(string){
    if (typeof string == "string"){
        let reverse = "";
        for (let i = string.length - 1; i >= 0; i--){
            reverse += string[i];
        }
        return reverse
    } else {
        return "Negalimi duomenys";
    }
    
}
console.log(reverseString("Hello World"));
