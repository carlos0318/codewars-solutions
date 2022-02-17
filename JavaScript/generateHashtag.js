function generateHashtag(str) {
  if (str.trim() === "") return false;
  const stringWithCamelCase = str
    .replace(/\b\w/g, (l) => l.toUpperCase())
    .replace(/\s+/g, "");
  const stringWithHashtag = `#${stringWithCamelCase}`;
  return stringWithHashtag.length > 140 ? false : stringWithHashtag;
}

console.log(generateHashtag(
  "#Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
));
