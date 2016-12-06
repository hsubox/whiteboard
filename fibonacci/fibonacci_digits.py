# https://projecteuler.net/problem=25
# What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

import math

arrFib = [1,1]

def nextFib(arrFib):
    arrFib.append(arrFib[-1]+arrFib[-2])
    return arrFib[-1]

while math.log(nextFib(arrFib),10) <= 999:
    pass

print arrFib[-1]
print len(arrFib)
