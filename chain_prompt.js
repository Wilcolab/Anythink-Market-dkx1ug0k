/*
1. Write a JavaScript function called toKebabCase that takes a string as input.
2. Validate the input and throw a descriptive error if it is not a string, null, or undefined.
3. Normalize the string by trimming spaces, converting to lowercase, and removing special characters.
4. Replace spaces or underscores with hyphens and return the kebab-case result.

Examples:
toKebabCase("Hello World") -> "hello-world"
toKebabCase(" Hello__World! ") -> "hello-world"
*/

function toKebabCase(input) {
  if (typeof input !== "string") {
    throw new Error("Input must be a string.");
  }

  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s_]/g, "")
    .replace(/[\s_]+/g, "-");
}
