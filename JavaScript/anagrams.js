function anagrams(word, words) {
  return words.filter(
    (a) => word.split("").sort().join("") === a.split("").sort().join("")
  );
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));