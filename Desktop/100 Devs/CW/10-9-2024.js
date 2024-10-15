// Description:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


const arr = [1,2,3,4]

const iterate = (arr) => {
  let result = 1
  for (let i = 0; i < arr.length; i ++) {
    result *= arr[i]
  }
  return result;
};
console.log (iterate(arr))
