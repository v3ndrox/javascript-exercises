const palindromes = function (string) {
  let reversed = "";
  const reduced = string.replaceAll(" ", "").toLowerCase();
  const original = reduced
    .replaceAll("!", "")
    .replaceAll("?", "")
    .replaceAll(",", "")
    .replaceAll(".", "");
  for (let i = 0; i <= reduced.length; i++) {
    const place = reduced.charAt(reduced.length - 1 - i);
    console.log("place " + place);
    if (place === "!" || place === "," || place === "." || place === "?") {
      continue;
    }
    reversed += place;
  }
  console.log(reversed);
  console.log(original);
  if (reversed === original) return true;
  return false;
};

// Do not edit below this line
module.exports = palindromes;
