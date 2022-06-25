module.exports = function toReadable(num) {
    let result = "";

    let ones = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
  
    let myHngr = Math.trunc(num / 100);
    let myTens = num % 100;
    let myOnes = num % 10;
  
    if(num === 0){
      return 'zero';
    }
  
    if(myHngr){
      result += `${ones[myHngr - 1]} hundred `;
    }
    if(Math.trunc(myTens /10)){
      if(myTens < 20){
        result += `${ones[myTens - 1]}`;
        return result;
      } else {
        result += `${tens[Math.trunc(myTens /10) - 2]} `;
      }
    }
  
    if(myOnes){
      result += `${ones[myOnes - 1]}`;
    }
  
    return result.trim();
};
