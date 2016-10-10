# given an integer r
# prints first r rows of pascal's triangle

import math

def pascal_triangle(r):
    for i in range(0,r+1):
        create_row(i)

def create_row(r):
    row = ""
    for i in range(0,r+1):
        row = row + " " + str(comb(r, i))
    print row

def comb(n, k):
    return  math.factorial(n)/(math.factorial(k)*math.factorial(n-k))

pascal_triangle(3)
pascal_triangle(10)
