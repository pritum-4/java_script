function generateFibonacciSeries(numTerms) {
    let fibSeries = [0, 1];
    
    if (numTerms === 1) {
        return [0];
    } else if (numTerms === 2) {
        return fibSeries;
    } else {
        for (let i = 2; i < numTerms; i++) {
            fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
        }
        return fibSeries;
    }
}

// Example usage:
const numTerms = 10;
const fibonacciSeries = generateFibonacciSeries(numTerms);
console.log("Fibonacci series with", numTerms, "terms:", fibonacciSeries);
