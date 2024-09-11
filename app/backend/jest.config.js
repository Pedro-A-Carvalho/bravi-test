/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  estRegex: './*\.test\.ts$',
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};