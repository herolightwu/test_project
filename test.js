// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

let input = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

    function isVowel(ch)
    {
        ch = ch.toUpperCase();
        return (ch == 'A' || ch == 'E'
                || ch == 'I' || ch == 'O'
                || ch == 'U');
    }
       
    // Returns count of vowels in str
    function countVowels(str)
    {
        let count = 0;
        for (let i = 0; i < str.length; i++)
            if (isVowel(str[i])) // Check for vowel
                ++count;
        return count;
    }
    

const str_array = input.split(" ");
let result = str_array[0];
for (let i = 1; i< str_array.length - 1; i++)
{
    if (result.length < str_array[i].length){
        result = str_array[i];
    } else if (result.length == str_array[i].length) {
        if (countVowels(result) < countVowels(str_array[i])) {
            result = str_array[i];
        }
    }
}

console.log(result);