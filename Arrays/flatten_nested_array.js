function flattenArray(arr) {
    return arr.reduce((acc, val) => acc.concat(val), []);
}

const nestedArray = [[1, 2], [3, 4], [5]];
console.log(flattenArray(nestedArray));
