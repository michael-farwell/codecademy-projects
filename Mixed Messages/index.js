import { MESSAGES } from "./message-components.js";

const getRandomNumber = (range) => {
  return Math.ceil(Math.random() * range);
};

const getLuckyNumbers = () => {
  let luckyNumbers = [];

  for (const x in Array.from(Array(5))) {
    luckyNumbers.push(getRandomNumber(69));
  }
  return luckyNumbers.join("-");
};

const getRandomMessage = () => {
  return MESSAGES[getRandomNumber(MESSAGES.length) - 1];
};

console.log(`Your fortune: "${ getRandomMessage() }"`);
console.log(`Your lucky numbers: ${ getLuckyNumbers() }`);