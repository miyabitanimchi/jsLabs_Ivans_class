const isPrimeNumber = (num) => {
if (num < 2 || !Number.isInteger(num)) {
    return `${num} is not a prime number`;
} else if (num === 2) {
    return "2 is a prime number";
} else if (num % 2 === 0) {
    return `${num} is not a prime number`;  
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
    let list = [];
    for (i = start; i <= end; i++) {
        list.push(i);
    }
    console.log(list);
        list.filter((num) => {
            if (num < 2 || !Number.isInteger(num)) {
                return false;
            } else if (num === 2) {
                return true;
            } else if (num % 2 === 0) {
                return false;
            } else if (num % 2 === 1) {
                for (i = 2; i <= end; i++) {
                    if (num % i === 0) {
                        return false;
                    } 
                }
            } else {
                return true;
            }
        });
        return list;
}

console.log(showPrimeNumberFromTheRange(1, 10));