function createPhoneNumber(numbers) {
  return numbers.reduce((p, c) => p.replace("x", c), "(xxx) xxx-xxxx");
}

console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
