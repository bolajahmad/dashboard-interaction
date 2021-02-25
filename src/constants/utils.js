export function toKebab(word) {
  const splitted = word.split("_");

  return splitted
    .map((letter) => {
      if (/[A-Z]/.test(letter)) {
        ` ${letter.toLowerCase()}`;
      }

      return letter;
    })
    .join("-")
    .trim()
    .replace(/[_\s]+/g, "");
}

export function toTitle(word) {
  return toKebab(word).split("-").map(capitalize).join(" ");
}

export function capitalize(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
}
