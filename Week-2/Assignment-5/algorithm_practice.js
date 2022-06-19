//method1 Iterative
function binarySearchPosition(numbers, target) {
    let left = 0, right = numbers.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (numbers[mid] > target) {
            right = mid - 1;
        }
        else if (numbers[mid] < target) {
            left = mid + 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}

//method2 Recursive

/*function binarySearchPosition(numbers, target) {
    const search = (left, right) => {
        if (left > right) return -1;
        const mid = Math.floor((left + right) / 2);
        if (numbers[mid] > target) {
            return search(0, mid - 1);
        }
        else if (numbers[mid] < target) {
            return search(mid + 1, right);
        }
        else {
            return mid;
        }
    }
    return search(0, numbers.length - 1) ;
}
*/


console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // shouldprint 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // shouldprint 3
