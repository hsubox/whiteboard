# https://projecteuler.net/problem=49

import math

def isPrime(x):
  for i in xrange(2, int(math.sqrt(x)+1)):
    if x % i == 0:
      return False
  return True

four_digit_primes = set()
for i in xrange(1000, 10000):
    if isPrime(i):
        four_digit_primes.add(i)

def isPermutation(a, b, c):
    list_a = list(str(a))
    list_a.sort()
    list_b = list(str(b))
    list_b.sort()
    list_c = list(str(c))
    list_c.sort()
    if list_a == list_b == list_c:
        return True
    else:
        return False

for a in four_digit_primes:
    for b in four_digit_primes:
        if a >= b:
            continue
        diff = b - a
        if (b + diff) in four_digit_primes:
            if isPermutation(a, b, b+diff):
                print a, b, b+diff
