/*
You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:
nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071

If no bigger number can be composed using those digits, return -1:
nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
*/

function nextBigger(n){
  var digits = n.toString().split('').map(x => parseInt(x));
  var i = firstLargerDigit(digits);
  if (i == -1) {
    return i
  }
  var j = smallestDigitLarger(digits,i);
  console.log(digits);
  console.log(i);
  console.log(j);
  digits.splice(i, 0, digits.splice(j,1)[0]);
  console.log(digits);
  var sorted_second_half = digits.slice(i+1).sort((a,b) => a > b);
  return parseInt(digits.slice(0,i+1).concat(sorted_second_half).join(""));
}

function smallestDigitLarger(digits,i) {
  var digit = digits[i] + 1;
  var index_larger = -1;
  while (index_larger == -1) {
    if (digit > 9) {
      return -1;
    }
    index_larger = digits.indexOf(digit,i+1);
    digit += 1;
  }
  return index_larger;
}

function firstLargerDigit(digits) {
  for (var i = digits.length - 2; i >= 0; i--) {
    if (digits[i] < digits[i+1]) {
      return i;
    }
  }
  return -1;
}
