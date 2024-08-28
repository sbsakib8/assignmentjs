
// Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.
function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    var vcount = 0;
    
    
  for (var x = 0; x < str.length; x++) {
    
    if (vowels.indexOf(str[x]) !== -1) {
      
      vcount += 1;
    }
  }
    
  return vcount;
  }
  
  console.log(countVowels("hello world")); // 3
  console.log(countVowels("Javascript")); // 3
  