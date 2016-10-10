# given an amount, calculate the number of ways change could be returned using pennies(1), nickels(5), dimes(10), and quarters(25)

def count(coin_set, amt):
    # memoization initialize: rows are for amt, cols are for smallest coin to largest coin
    table = [[0 for x in range(len(coin_set))] for x in range(amt+1)]

    # base case (amt = 0)
    for i in range(len(coin_set)):
        table[0][i] = 1

    # fill in memoization table
    for i in range(1, amt+1): # iter to amt
        for j in range(len(coin_set)): # iter on coin value
            # case 1: if we include this coin
            case_1 = table[i - coin_set[j]][j] if i-coin_set[j] >= 0 else 0
            # case 2: if we don't include this coin
            case_2 = table[i][j-1] if j >= 1 else 0
            # total count
            table[i][j] = case_1 + case_2
    return table[amt][len(coin_set)-1]

count_set = [1,5,10,25]
amt = 12
assert(count(count_set,amt) == 4)
