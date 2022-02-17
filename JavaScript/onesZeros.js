const binaryArrayToNumber = (arr) => {
  // your code
  return parseInt(arr.join(""), 2);
};

console.log(binaryArrayToNumber([1,0,1,1]))