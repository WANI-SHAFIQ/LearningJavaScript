function countOccurrences(arr, value) {
    return arr.reduce((count, item) => (item === value ? count + 1 : count), 0);
}

const numbers = [1, 2, 3, 2, 2, 4, 5];
console.log(countOccurrences(numbers, 2));
