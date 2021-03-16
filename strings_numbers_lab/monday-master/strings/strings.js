// Implement the following functions
// your code. Refactor this file as you see fit. Export or modify any function as you see fit. Add additonal functions as you see fit. 

const stringLib = () => 
    {
        // console.log(concatinate("Hello", "world"));
        console.log(ASCIINumberToChar(66));
        console.log(CharToAsciiNumber("A"));
        // console.log(ReverseString("Hello"));
        // console.log(GenerateOnlyUpperCase("this is upper case"));
        // console.log(GenerateOnlyLowerCase("THIS IS LOWER CASE"));
        // console.log(GenerateOnlyNumbers());
        console.log(GenerateUpperAndLowerCase("no MUSIC NO life"));

function concatinate(a,b)
{
// append one string to another
    return a + b;
    // return `${a} ${b}`;
}


function ASCIINumberToChar(Number)
{
// take one number, say, 127 and convert it to its ASCII char representation
    return String.fromCharCode(Number);
    
}

function CharToAsciiNumber(aChar)
{
// take one Character, say, 'A' and convert it to it's Number representation
    return aChar.charCodeAt(0);
}

    function ReverseString(origionalString)
{
// return a string, ie: Hello becomes olleH


// return origionalString.split("").reverse().join("");
    let newString = "";
    for (let i = origionalString.length - 1; i >= 0; i--) {
        newString += origionalString[i];
}
    return newString;
}

function GenerateOnlyUpperCase(upperCase)
{
//Ie: A,B,C,D,E,F,G...Z
    return upperCase.toUpperCase();
    }


function GenerateOnlyLowerCase(lowerCase)
{
//Ie: a,b,c,d,e,f,g...z
    return lowerCase.toLowerCase();
}

function GenerateOnlyNumbers(arr)
{
//Ie: 0,1,2,3...9
    let arrList = [];
    for (let i = 0; i < 10; i++) {
        arrList.push(i)
}
    return arrList;
}

function GenerateOnlySymbols()
{
//Ie: $, %, !, #, etc
}


function GenerateUpperAndLowerCase(upperAndLowerCase)
{
    //Ie: A,B,C,D,E,F,G...Z and  a,b,c,d,e,f,g...z
    let upperCase = GenerateOnlyUpperCase(upperAndLowerCase)
    let lowerCase = GenerateOnlyLowerCase(upperAndLowerCase)
    return `${upperCase} ${lowerCase}`;
}

}

console.log(stringLib());

const string = "Miyabi";
const charrr = string.charCodeAt(1);

console.log(charrr);