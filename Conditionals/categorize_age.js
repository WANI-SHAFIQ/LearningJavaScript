function categorizeAge(age) {
    if (age < 13) return "Child";
    if (age < 20) return "Teenager";
    if (age < 65) return "Adult";
    return "Senior";
}

console.log(categorizeAge(10));
console.log(categorizeAge(17));
console.log(categorizeAge(30));
console.log(categorizeAge(70));
