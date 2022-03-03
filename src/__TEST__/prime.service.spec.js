const primeService = require('../services/prime.service');

describe('test prime.service', () => {
  describe('test isPrime method ', () => {
    test('test isPrime method true', () => {
      const isPrime = primeService.isPrime(7);
      expect(isPrime).toBeTruthy();
    });

    test('test isPrime method false', () => {
      const isPrime = primeService.isPrime(4);
      expect(isPrime).toBeFalsy();
    });
    test('test isPrime method false', () => {
      const isPrime = primeService.isPrime('a');
      expect(isPrime).toBeFalsy();
    });
  });

  describe('test primeUpTo2 method', () => {
    test('test primeUpTo2 method []', () => {
      const prime = primeService.primeUpTo2(1);
      expect(prime.length).toEqual(0);
    });

    test('test primeUpTo2 method [3, 2]', () => {
      const prime = primeService.primeUpTo2(3);
      expect(prime).toEqual([3, 2]);
    });

    test('test primeUpTo2 method [3, 2]', () => {
      const prime = primeService.primeUpTo2(7);
      expect(prime).toEqual([7, 5, 3, 2]);
    });
  });
});
