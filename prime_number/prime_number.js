const isPrimeNumber = (num) => {
if (num < 2 || !Number.isInteger(num)) {
    return `${num} is not a prime numberrrr`;
} else if (num === 2) {
    return "2 is a prime number";
} else if (num % 2 === 0) {
    return `${num} is not a prime numberrrr`;  
} else if (num % 2 === 1) {
    let rangeToCheckPrime = num / 2;
    for (i = 2; i <= rangeToCheckPrime - 1; i++) {
        if (num % i === 0) {
            return `${num} is not a prime number`;
        } 
    }
    return `${num} is a prime number`;
}
}
console.log(isPrimeNumber(123459997));


const showPrimeNumberFromTheRange = (start, end) => {
    let primeNumberList = [];
    for (i = start; i <= end; i++) {
        primeNumberList.push(i);
        // if (i < 2 || !Number.isInteger(num)) {
        //     return `${num} is not a prime numberrrr`;
        // } else if (num === 2) {
        //     return "2 is a prime number";
        // } else if (num % 2 === 0) {
        //     return `${num} is not a prime numberrrr`;  
        // } else if (num % 2 === 1) {
        // if (num % i === 0) {
        //     return `${num} is not a prime number`;
        // } 
        // }
        // return `${num} is a prime number`;
    }
    console.log(primeNumberList);
        primeNumberList.filter((num) => {
            if (num < 2 || !Number.isInteger(num)) {
                return false;
            } else if (num === 2) {
                return true;
            } else if (num % 2 === 0) {
                return false;  
            } else if (num % 2 === 1) {
                let rangeToCheckPrime = num / 2;
                for (i = 2; i <= rangeToCheckPrime - 1; i++) {
                    if (num % i === 0) {
                        return false;
                    } 
                }
                return true;
            }
        })
    return primeNumberList;

}

console.log(showPrimeNumberFromTheRange(4, 10));