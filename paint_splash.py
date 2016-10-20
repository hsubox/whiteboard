# Problem statement: Create a function to replicate the "plain splash" functionality in MS paint
# Input: pixels - a 2d array of starting pixel values representing an image
#        click_point - a tuple representing the row and column index of the point that was clicked
#        target_color - the new color to be splashed
# Output: new_pixels - a new 2d array with the relevant pixels updated (can be done in place)

def get_color_at(point, pixels):
    x, y = point
    return pixels[x][y]

def set_color_at(point, pixels, color):
    x, y = point
    pixels[x][y] = color
    return pixels

def get_neighbors(point, pixels):
    x, y = point
    max_x = len(pixels)
    max_y = len(pixels[0])
    potential_neighbors = [(x+1,y), (x-1,y), (x, y+1), (x, y-1)]
    pixels_bound_filter = lambda z: 0 <= z[0] < max_x and 0 <= z[1] < max_y
    return filter(pixels_bound_filter, potential_neighbors)

def paint_splash(pixels, click_point, target_color):
    initial_color = get_color_at(click_point, pixels)
    queue = [click_point]
    visited = set(click_point)

    while len(queue) > 0:
        current_point = queue.pop(0)
        if get_color_at(current_point, pixels) == initial_color:
            potential_neighbors = get_neighbors(current_point, pixels)
            unvisited_neighbors = filter(lambda x: x not in visited, potential_neighbors)
            for neighbor in unvisited_neighbors:
                queue.append(neighbor)
                visited.add(neighbor)
            set_color_at(current_point, pixels, target_color)

    return pixels;

# def pretty_print_array(pixels):
#     for row in pixels:
#         print row;
# test_pixels = [[0, 0, 0, 1, 0, 0, 0],
#                [0, 0, 0, 1, 1, 1, 0],
#                [0, 0, 0, 1, 0, 1, 0],
#                [0, 0, 0, 1, 1, 1, 1],
#                [0, 0, 0, 1, 0, 0, 0],
#                [0, 0, 0, 1, 0, 0, 0]]
# test_target_color = 2
# test_click_point = (2, 4)
# pretty_print_array(paint_splash(test_pixels, test_click_point, test_target_color))
