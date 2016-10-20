def min_num_squares(x):
    queue = [(x, 0)]
    visited = set()
    while len(queue) > 0:
        item = queue.pop(0)
        if item[0] == 0:
            return item[1]
        if item[0] > 0:
            new_values = map(lambda x: (item[0]-x, item[1]+1), squares_less_than(item[0]))
            new_values = filter(lambda x: x not in visited, new_values)
            queue += new_values
            map(lambda x: visited.add(x), new_values)
    return -1;

def squares_less_than(x):
    i = int(x**0.5)
    squares = []
    while (i**2 >=1):
        squares.append(i**2)
        i-= 1
    return squares

assert min_num_squares(7) == 4 # 2**2 + 1**1 + 1**1 + 1**1 = 7
assert min_num_squares(16) == 1  # 4**2 = 16
assert min_num_squares(41) == 2 # 5**2 + 4**2 = 41
