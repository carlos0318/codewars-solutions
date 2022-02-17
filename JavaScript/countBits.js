var countBits = function (n) {
  // return n.toString(2).split('').reduce((a, b)=> b==1 ? a += 1 : a += 0, 0);
  return n.toString(2).split("0").join("").length;
};
console.log(countBits(9));

//cuenta cuantos 1's hay en binario
