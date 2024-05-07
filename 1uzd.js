// Write a function findLongestWord that takes a string of words and returns the longest word in the string.

function findLongestWord(string){
    if (typeof string == "string"){
        let words = string.split(" ");
        let longest = words[0];
        for (word of words){
            if (longest.length < word.length){
                longest = word;
        }
    }
    return longest;
    } else {
        return "negalimi duomenys";
    }
}

console.log(findLongestWord("a aa aa aaaa"));