// Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.

function mergeArrays(arr1, arr2) {
    let merge = arr1.concat(arr2);
    return merge;
  }
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
  console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]
  