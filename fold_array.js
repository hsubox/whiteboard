
/*
Fold an array

Folds a given array of integers by the middle x-times.
1. If the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.
2. The array will always contain numbers and will never be null.
3. Runs will always be a positive integer greater than 0 and says how many runs of folding the method has to do.
4. If an array with one element is folded, it stays as the same array.
5. The input array should not be modified!

Fold 1-times:
[1,2,3,4,5] -> [6,6,3]
Fold 2-times:
[1,2,3,4,5] -> [9,6]
*/

function foldArray(array, runs)
{
  while (runs > 0) {
    array = foldArrayOnce(array);
    runs -= 1;
  }
  return array;
}

function foldArrayOnce(array)
{
  if (array.length % 2 == 0) {
    split_at = array.length/2
  }
  else {
    split_at = array.length/2 + 1;
  }
  left_half = array.slice(0, array.length/2).concat([0]);
  right_half = array.slice(array.length/2).reverse();
  new_array = [];
  for (var i = 0; i < array.length/2; i++) {
    new_array[i] = left_half[i] + right_half[i];
  }
  return new_array;
}
