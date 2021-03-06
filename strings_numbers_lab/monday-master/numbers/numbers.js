// Implement the following functions

const numberLib = () => {
      for (let a = 0; a < 5; a++) {
        for (let b = 0; b < 5; b++) {
          // console.log(add(a, b));
          // console.log(sub(a, b));
          // console.log(mul(a, b));
          // console.log(div(a, b));
          // console.log(Exponentiation(a, b));
          // console.log(Increment(a, b));
        }
      }
      // console.log(NumberListA(1, 5));
      // console.log(NumberListB(3, 10, 0));
      // console.log(randomNumberBetweenRange(1, 10))
      // console.log(IsOdd(2));
      // console.log(IsEven(4));
      console.log(RandomNumberList(1, 20));
      // console.log(NumberListC(2, 10, false));
      // console.log(RandomNumberListB(5, 14, 5, true));

  function add(a, b) {
      // add a to b
      return a + b;
    }

  function sub(a, b) {
      // sub a from b
      return b - a;
    }

  function mul(a, b) {
      // mul a by b
      return a * b;
    }

  function div(a, b) {
      // dib a by b
      if (b == 0) {
        return;
      }
      return a / b;
    }

  function Exponentiation(a, b) {
      // expont a of b
      return a ** b;
    }

  function Increment(a, b) {
      // inc a by b
      return a += b;
    }

    
  function Decrement(a, b) {
      // dec a by b
      return a -= b;
    }
    
  function NumberListA(start,end)
      {
      // return list of numbers starting at start and ending at end
      let listA = [];
      for (let i = start; i <= end; i++) {
        listA.push(i);
      }
      return listA;
      }

  function NumberListB(start, count, skipEvery) {
      // return list of numbers starting at start and ending at end but skipping every N (ie: skip every 2, or skip every 3)
      let listB = [];
      let skipCount = 0;
      for (let i = start; (i <= (start + count)); i++) {
        if (skipEvery === skipCount) {
          listB.push(i); 
          skipCount = 0;
        }
        skipCount ++;
        if (skipCount > skipEvery) {
          skipCount = 0;
        }
      }
      return listB;
    }

    function randomNumberBetweenRange(min, max) {  
      return Math.floor(Math.random() * (max - min) + min); 
  }  


  function NumberListC(start,count, shouldBeRandomOrNot) {
      // return list of numbers starting, continuing for (count) and a boolean to determine if the list of numbers should be random or not
      let listC = [];
      for (let i = start; i <= (start + count); i++) {
          if (shouldBeRandomOrNot === true) {
            listC.push(randomNumberBetweenRange(start,(start+count)));
          } else {
            listC.push(i);
          }
          
      }
      return listC;
      }

  function IsOdd(aNumber) {
      // is a number odd? true false
      return (aNumber % 2 === 1) ? true : false;
      }        

  function IsEven(aNumber) {
      // is a number even? true false
      return (aNumber % 2 === 0) ? true : false;
      }        

  function RandomNumberList(start,end) {
      // return list of random numbers between start and end
      let randomNumFromTheList = [];
      for (let i = start; i <= end; i++) {
        let index1 = Math.round(Math.random() * i + start)
        randomNumFromTheList.push(index1);
      }
      return randomNumFromTheList;
      }        

  function RandomNumberListB(start,end,count, allowDuplicates) {
      // return count number of random numbers, between start and end. use allowDuplicates to choose if we should allow duplicates in the list or not
      let randomNumFromTheListB = [];
      let numberList = NumberListA(start, end)
      if (allowDuplicates) {
        return NumberListC(start, count, true);
      }
      for (i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * numberList.length);
        randomNumFromTheListB.push(numberList[index]);
        numberList.splice(index, 1);
      }
      return randomNumFromTheListB;
      }        

      
    }

    console.log(numberLib());