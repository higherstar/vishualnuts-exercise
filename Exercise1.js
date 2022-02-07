// Exercise 1:

// Write or describe an algorithm that prints the whole integer numbers to the console, start
// from the number 1, and print all numbers going up to the number 100.
// However, when the number is divisible by 3, do not print the number, but print the word
// 'Visual'. If the number is divisible by 5, do not print the number, but print 'Nuts'. And for
// all numbers divisible by both (eg: the number 15) the same, but print 'Visual Nuts'.
// How will you keep this code safe from bugs? Show how you would guarantee that this code
// keeps working when developers start making small feature adjustments. (Maybe we would
// want to print the first 500 numbers, ...).

const printWholeNumbers = (end) => {
  let start = 1;
  while (start <= end) {
    if (start % 15 === 0) {
      console.log("Visual Nuts");
    } else if (start % 3 === 0) {
      console.log("Visual");
    } else if (start % 5 === 0) {
      console.log("Nuts");
    } else {
      console.log(start);
    }
    start++;
  }
};

const end = 100;
printWholeNumbers(end);

// To make this code bugs free, We need to make sure that:
// 1. All of the conditional statements are added according to the precedence.
// 2. Print the number if not even a single condition is true.
// 3. Updating current number idx at the end of iteration.
