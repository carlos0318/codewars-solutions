const fibonacci = (n, index = 1, result = 0) => n ? fibonacci(n-1, index + result, index) : result;

console.log(fibonacci(70));