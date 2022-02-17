function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  return Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}
console.log(findNextSquare(121));
