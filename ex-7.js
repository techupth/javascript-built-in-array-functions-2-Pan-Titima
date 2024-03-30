function isPalindrome(string) {
  // Start coding here
  let originString = string;
  let originArr = originString.split("");
  let reversedArr = originArr.reverse();
  let reverseString = reversedArr.join("");

  return originString === reverseString;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false