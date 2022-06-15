//1. count: return an object which shows the count of each character

function count(input) {
    let result = {};
    for (const num of input) {
        result[num] = (result[num] || 0) + 1; // because of result[num] = undefined, assign 0 to result[num]
    }                                         // is equivalent to "result[num] = result[num] ? result[num] + 1 : 1;"
    return result;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1)); // should print {a:3, b:1, c:2, x:1}


//2. groupByKey: return an object which shows the summed up value of each key.

function groupByKey(input) {
    const result = {};
    for (i = 0; i < input2.length; i++) {
        if (!(input2[i].key in result)) {
            result[input2[i].key] = input2[i].value;
        }
        else {
            result[input2[i].key] += input2[i].value;
        }
    }
    return result
}

let input2 = [
{ key: "a", value: 3 },
{ key: "b", value: 1 },
{ key: "c", value: 2 },
{ key: "a", value: 3 },
{ key: "c", value: 5 },
];

console.log(groupByKey(input2)); // should print {a:6, b:1, c:7}
