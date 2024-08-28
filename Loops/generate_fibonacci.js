function generateFibonacci(n) {
    const sequence = [0, 1];
    while (sequence.length < n) {
        const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(next);
    }
    return sequence;
}

console.log(generateFibonacci(10));
