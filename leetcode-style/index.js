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

// find the missing number
function findMissing(arr) {
  let n = arr.length + 1;
  let expectSum = (n * (n + 1)) / 2;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return expectSum - sum;
}
console.log(findMissing([1, 2, 3, 5]));

// capitalize every first letter of every word
function capitalizeWord(str) {
  let arr = str.split(" ");
  let text = "";

  for (let i = 0; i < arr.length; i++) {
    text += arr[i][0].toUpperCase() + arr[i].slice(1) + " ";
  }

  return text.trim();
}
console.log(capitalizeWord("ang pogi ni christian"));

// group numbers into even and odd
function groupNumbers(arr) {
  const even = [];
  const odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  return {
    even: even,
    odd: odd,
  };
}
console.log(groupNumbers([1, 2, 3, 4, 5, 6]));

// count many times character appears
function charCount(str) {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }

  return result;
}
console.log(charCount("madam"));

// sort objects by property
function sortObject(obj) {
  return obj.sort(function (a, b) {
    return a.age - b.age;
  });
}
console.log(
  sortObject([
    {
      name: "Christian",
      age: 22,
    },
    {
      name: "Maki",
      age: 5,
    },
    {
      name: "Ming ming",
      age: 10,
    },
    {
      name: "Angela",
      age: 23,
    },
  ]),
);
