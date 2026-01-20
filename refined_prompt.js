/*
Write a JavaScript function toCamelCase that converts a given string into camelCase.
Handle edge cases like empty strings, null, undefined, extra spaces, special characters,
numbers, and mixed casing. Throw descriptive errors for invalid inputs.

Examples:
toCamelCase("hello world") -> "helloWorld"
toCamelCase(" Hello world! ") -> "helloWorld"
toCamelCase(123) -> Error
*/

function toCamelCase(input) {
  if (typeof input !== "string") {
    throw new Error("Input must be a string.");
  }

  return input
    .trim()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(/\s+/)
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
}
