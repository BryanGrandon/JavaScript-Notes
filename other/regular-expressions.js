const forma1 = / /;
const forma2 = RegExp();

// Assertions

const assertion = (regexp, testText) => {
  const parameter = regexp;
  const text = testText;
  parameter.test(text)
    ? console.log("It is right")
    : console.log("It is incorrect");
};

assertion(/^Che/, "Check the start"); // It is right
assertion(/end$/, "Check the end"); // It is right
assertion(/word\b/, "Check if the word is found in the text"); // It is right
assertion(/oun\B/, "check if the phrase is found in the text"); // It is right

// Quantifiers

const quantifiers = (regexp, testText) => {
  const parameter = regexp;
  const text = testText;
  parameter.test(text)
    ? console.log("It is right")
    : console.log("It is incorrect");
};

quantifiers(/a*/, "Waits 0 or more times the element"); // It is right
quantifiers(/a+/, "Wait minimum 1 or more times the element"); // It is right
quantifiers(/ime?/, "Find 0 or 1 time the element"); // It is right
quantifiers(/a{2}/, "Look for two aa"); // It is right
quantifiers(/a{2,}/, "Look for at least two aaa"); // It is right
quantifiers(/a{2,4}/, "minimum two aa and maximum four aaaa"); // It is right

// Character sets

const characterSets = (regexp, testText) => {
  const parameter = regexp;
  const text = testText;
  parameter.test(text)
    ? console.log("It is right")
    : console.log("It is incorrect");
};

characterSets(/\d/, "Search any digit"); // number 21
characterSets(/\D/, "Matches any character that is not a digit"); // Alphabet
characterSets(/\w/, "[A-Za-z0-9]"); // Alphabet and number
characterSets(/\W/, "Special character <"); // space is special character
characterSets(/\s/, "Look for a blank space"); // Detect blank space
characterSets(/\S/, "Find that it is not a blank space"); // That is not = ""
characterSets(
  /\n/,
  `
  `
);

// Groups and Ranks

const groupsRanks = (regexp, testText) => {
  const parameter = regexp;
  const text = testText;
  parameter.test(text)
    ? console.log("It is right")
    : console.log("It is incorrect");
};

groupsRanks(/red|green/, "If it matches red or green");
groupsRanks(/[a-c]/, "Indicates a number of characters to search for");
groupsRanks(/[^a-c]/, "Excludes a number of characters");
