/*
Write simple .camelCase method (camel_case function in PHP or CamelCase in C#) for strings. All words must have their
first letter capitalized without spaces.

For instance:
  "hello case".camelCase() => HelloCase
  "camel case word".camelCase() => CamelCaseWord
*/

String.prototype.camelCase = function() {
  return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase());
};
