// Implement the following functions
// your code. Refactor this file as you see fit. Export or modify any function as you see fit. Add additonal functions as you see fit. 

const stringLib = () => {
        // console.log(GenerateCharactersTable(65, 70));
        // console.log(concatinate("Hello", "world"));
        // console.log(ASCIINumberToChar(0));
        // console.log(CharToAsciiNumber("Miyabi the human"));
        // console.log(ReverseString("Hello"));
        // console.log(GenerateOnlyUpperCase("this is upper case"));
        // console.log(GenerateOnlyLowerCase("THIS IS LOWER CASE"));
        console.log(GenerateOnlyNumbers());
        console.log(GenerateOnlySymbols());
        // console.log(GenerateUpperAndLowerCase());

    function GenerateCharactersTable(start, end) {
        let table = [];
        for (let i = start; i <= end; i++) {
            table.push(String.fromCharCode(i));
        }
        return table;
    }



    function concatinate(a,b) {  // append one string to another   
        return a.concat(b);
    }

    function ASCIINumberToChar(Number) {  // take one number, say, 127 and convert it to its ASCII char representation
        // return String.fromCharCode(Number);
        let arr = [];
        for (i = Number; i < 128; i++) {
            arr.push(String.fromCharCode(i));
        }
        return arr;
    }

    function CharToAsciiNumber(aChar) {  // take one Character, say, 'A' and convert it to it's Number representation
        // return aChar.charCodeAt(0);
        let arr2 = [];
        for (i = 0; i < aChar.length-1; i++) {
            arr2.push(aChar.charCodeAt(i));
        }
        return arr2;
    }

    function ReverseString(origionalString) {
    // return a string, ie: Hello becomes olleH

    // return origionalString.split("").reverse().join("");
        let newString = "";
        for (let i = origionalString.length - 1; i >= 0; i--) {
            newString += origionalString[i];
        }
        return newString;
    }

    function GenerateOnlyUpperCase(upperCase) {
    //Ie: A,B,C,D,E,F,G...Z
        return upperCase.toUpperCase();
    }


    function GenerateOnlyLowerCase(lowerCase) {
    //Ie: a,b,c,d,e,f,g...z
        return lowerCase.toLowerCase();
    }

    function GenerateOnlyNumbers() {
    //Ie: 0,1,2,3...9
        // let arrList = [];                 // way 1
        // for (let i = 0; i < 10; i++) {
        //     arrList.push(i)
        // }
        // return arrList;
        // return GenerateCharactersTable(48, 57)  

        let array = [];                        // //way2
        for (i = 0; i < 128; i++) {
            const reg = new RegExp(/[0123456789]/g);
            reg.test(String.fromCharCode(i)) && array.push(String.fromCharCode(i));
        }
        return array;

    }

    function GenerateOnlySymbols() {
        //Ie: $, %, !, #, etc
        // let symbolGroup1 = GenerateCharactersTable(33, 47);     // way 1
        // let symbolGroup2 = GenerateCharactersTable(58, 64);
        // let symbolGroup3 = GenerateCharactersTable(91, 96);
        // let symbolGroup4 = GenerateCharactersTable(123, 126);
        // return `${symbolGroup1}${symbolGroup2}${symbolGroup3}${symbolGroup4}`

        let arr3 = [];                                             // way 2
        for (i = 0; i < 128; i++) {
            const reg = new RegExp(/[!"#$%&'()\*\+\-\.,\/:;<=>?@\[\\\]^_`{|}~]/g);
            reg.test(String.fromCharCode(i)) && arr3.push(String.fromCharCode(i));
        }
        return arr3;
    }

    function GenerateUpperAndLowerCase() {
        //Ie: A,B,C,D,E,F,G...Z and  a,b,c,d,e,f,g...z
        let upperCase = GenerateCharactersTable(65, 90)
        let lowerCase = GenerateCharactersTable(97, 122)
        return `${upperCase} ${lowerCase}`;
    }
}

console.log(stringLib());

const string = "Miyabi";
const charrr = string.charCodeAt(1);

console.log(charrr);