// reversing the string
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("hello"));

// count vowels
function countVowels(str) {
  let count = 0;
  let text = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(text[i])) {
      count++;
    }
  }

  return count;
}
console.log(countVowels("aeiou"));

// find largest number
function largestNumber(arr) {
  let max = Math.max(...arr);
  return max;
}
console.log(largestNumber([3, 5, 10, 1000, 245, 432]));

// return odd if the number is odd otherwise return even
function isOddEven(value) {
  // let isEvenOdd = "";

  // if (value % 2 === 0) {
  //   isEvenOdd = "Even";
  // } else {
  //   isEvenOdd = "Odd";
  // }

  // return isEvenOdd;
  return value % 2 == 0 ? "Even" : "Odd";
}
console.log(isOddEven(1));

// getting all the sum from the array
function sumArray(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}
console.log(sumArray([100, 201, 25, 50, 21]));

// removing duplicates in the array
function removeDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}
console.log(removeDuplicates([1, 1, 2, 3, 3, 4, 4]));

// checking if the word is palindrome
function isPalindrome(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  if (reversed === str) {
    return true;
  }

  return false;
}
console.log(isPalindrome("racecar"));

// fizzbuzz
function fizzBuzz(number) {
  let result = "";
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  }

  if (number % 3 === 0) {
    return "Fizz";
  }

  if (number % 5 === 0) {
    return "Buzz";
  }

  return number;
}

for (let i = 1; i <= 50; i++) {
  console.log(fizzBuzz(i));
}
