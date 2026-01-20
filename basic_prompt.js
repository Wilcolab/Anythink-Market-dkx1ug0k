/*
Write a JavaScript function toCamelCase that converts strings to camelCase.
Example:
toCamelCase("hello world") -> "helloWorld"
*/

function toCamelCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}
