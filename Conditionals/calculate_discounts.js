function calculateDiscount(price, membership) {
    if (membership === "Gold") return price * 0.8;
    if (membership === "Silver") return price * 0.9;
    return price;
}

console.log(calculateDiscount(100, "Gold"));
console.log(calculateDiscount(100, "Silver"));
console.log(calculateDiscount(100, "None"));
