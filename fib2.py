# https://projecteuler.net/problem=25
# What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

import math
import matplotlib.pyplot as plt

def nextFib(arrFib):
    arrFib.append(arrFib[-1]+arrFib[-2])
    arrFib = arrFib[1:]
    return arrFib

def kdigFib(k):
    arrFib = [1,1]
    n = 2
    while math.log(arrFib[-1],10) <= k-1:
        arrFib = nextFib(arrFib)
        n += 1
    return n
    # print arrFib[-1] # this prints that fibonacci number
    # print n # that fibonacci number is the nth fibonacci number

# this is just for fun
# plots digits vs n-th fibonacci
results = []
for i in range(2,1000):
    results.append(kdigFib(i))

# print results
plt.plot(results)
plt.show()
# linearity suggests that we can come up with an alternate solution
