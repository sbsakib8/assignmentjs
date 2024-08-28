// Write a function to get the first character of a string. The function should take a single argument, which is the string.

function getFirstCharacter(str) {
    let first = str.at(0);
    let string = first.toString()
    return string ;
  }
  
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter("world")); // "w"
  