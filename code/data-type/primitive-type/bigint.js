// an (n) must be added at the end to make it a bigint

const bigInt = 9007199254740992n;
console.log(bigInt);

const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);
console.log(previousMaxSafe);

const hugeNumbers = {
  normal: BigInt(9007199254740991),
  string: BigInt("9007199254740991"),
  hexadecimal: BigInt(0x1fffffffffffff),
  binary: BigInt(0b11111111111111111111111111111111111111111111111111111),
  octal: BigInt(0o377777777777777777),
};
console.log(hugeNumbers);
