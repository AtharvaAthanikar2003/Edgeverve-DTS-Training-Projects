const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const limit = 50; // Hardcoded input, change this value for other limits
const primeNumbers = [];

for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
        primeNumbers.push(i);
    }
}

console.log(`Prime numbers up to ${limit}:`, primeNumbers);
