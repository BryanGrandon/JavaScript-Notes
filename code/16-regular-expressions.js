const forma1 = / /;
const forma2 = RegExp();

const regularExpressions = (regexp, testText) => {
  const parameter = regexp;
  const text = testText;
  parameter.test(text)
    ? console.log("It is right")
    : console.log("It is incorrect");
};

console.log("\nAssertions\n");

regularExpressions(/^Che/, "Check the start");
regularExpressions(/end$/, "Check the end");
regularExpressions(/word\b/, "Check if the word is found in the text");
regularExpressions(/oun\B/, "check if the phrase is found in the text");

console.log("\nQuantifiers\n");

regularExpressions(/a*/, "Waits 0 or more times the element");
regularExpressions(/a+/, "Wait minimum 1 or more times the element");
regularExpressions(/ime?/, "Find 0 or 1 time the element");
regularExpressions(/a{2}/, "Look for two aa");
regularExpressions(/a{2,}/, "Look for at least two aaa");
regularExpressions(/a{2,4}/, "minimum two aa and maximum four aaaa");

console.log("\nCharacter sets\n");

regularExpressions(/\d/, "Search any digit"); // number 21
regularExpressions(/\D/, "Matches any character that is not a digit"); // Alphabet
regularExpressions(/\w/, "[A-Za-z0-9]"); // Alphabet and number
regularExpressions(/\W/, "Special character <"); // space is special character
regularExpressions(/\s/, "Look for a blank space"); // Detect blank space
regularExpressions(/\S/, "Find that it is not a blank space"); // That is not = ""
regularExpressions(/\n/, ``); // In-line jumping

console.log("\nGroups and Ranks\n");

regularExpressions(/red|green/, "If it matches red or green");
regularExpressions(/[a-c]/, "Indicates a number of characters to search for");
regularExpressions(/[^a-c]/, "Excludes a number of characters");
