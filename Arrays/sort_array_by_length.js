function sortArrayByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

const strings = ["short", "medium", "a very long string"];
console.log(sortArrayByLength(strings));
