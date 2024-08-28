// Write a function to reverse a string. The function should take a single argument, which is the string to reverse.

function reverseString(str) {

    let splitString = str.split("");
    let reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("");

    return  joinArray;
  }
  
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"
  