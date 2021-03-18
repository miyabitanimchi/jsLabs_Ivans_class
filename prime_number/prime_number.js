const isPrimeNumber = (num) => {
if (num < 2 || !Number.isInteger(num)) {
    console.log(`${num} is not a prime number`);
    return false;
} else if (num === 2) {
    console.log("2 is a prime number");
    return true;
} else if (num % 2 === 0) {
    console.log(`${num} is not a prime number`);
    return false;  
} else if (num % 2 === 1) {
    let rangeToCheckPrime = num / 2;
    for (i = 2; i <= rangeToCheckPrime - 1; i++) {
        if (num % i === 0) {
            console.log( `${num} is not a prime number`);
            return false;
        } 
    }
    console.log(`${num} is a prime number`);
    return true;
    
}
}
// console.log(isPrimeNumber(5));
if (isPrimeNumber("5")) {
    console.log("5 is a prime number")
}



const showPrimeNumbersList = (start, end) => {
    let list = [];
    for (let i = start; i <= end; i++) {
        if (isPrimeNumber(i)) {
            console.log(i);
            list.push(i);
        }

    }
    console.log(list);
        
        return list;
}

console.log(showPrimeNumbersList(1, 1000000));