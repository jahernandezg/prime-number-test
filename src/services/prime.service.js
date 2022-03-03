
/**
 * Adds one number.
 * @param {int} number is a unique param.
 * @return {boolean} determine is prime or not
 */
function isPrime(number) {
  for (let i = 2, raiz = Math.sqrt(number); i <= raiz; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}

/**
 * Enter a number greater than 2
 * @param {int} number is a unique param.
 * @return {Array} Return array with the
 * prime numbers from the entered number to 2.
 */
function primeUpTo2(number) {
  const primeNumbers = [];
  for (let x = number; x >= 2; x--) {
    if (isPrime(x)) {
      primeNumbers.push(x);
    }
  }
  return primeNumbers;
}

module.exports = {
  primeUpTo2,
  isPrime,
};
