// Write a function titleCase that converts a sentence to title case (the first letter of each word capitalized).

function titleCase(string){
    if (typeof string == "string"){
        let newString = "";
        for (i in string){
            if (string[i - 1] == " " || i == 0){
                let letter = (string[i]).toUpperCase();
                newString += letter;
            } else {
                newString += string[i]; 
            }   
        }
    return newString;
    } else {
        return "Negalimi duomenys"
    }
    
}

console.log(titleCase("a quick brown fox jumped over the lazy dog"));
