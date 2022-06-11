function countAandB(input) {
    let i, countA = 0, countB = 0;
    for (i = 0; i < input.length; i++){
      if (input[i] === "a"){
        countA = countA + 1;
      }
      else if (input[i] === "b") {
        countB = countB + 1;
      }
    }
    let total_count = countA + countB ;

    return total_count
}

function toNumber(input) {
    let i;
    for (i = 0; i < input.length; i++){
        input[i] = input[i].charCodeAt(0) - 96
    }
    
    return input
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];

console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b' letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
