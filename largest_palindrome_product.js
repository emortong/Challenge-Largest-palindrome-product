/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function lgPal(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  var factorCheck;
  var factorsArr = []


  // do your work here
  if(digits === 2) {
    for(var i = 10; i<=99; i++) {
      for(var x = i+1; x <=99; x++) {
        factorCheck = x*i;
        if(isPalindrome(factorCheck)) {
          factor_0 = i;
          factor_1 = x;
          factorsArr.push(factorCheck);
          console.log(factor_0,factor_1, factorCheck)
        }
      }
    }
  }

  if(digits === 3) {
    for(var i = 100; i<=999; i++) {
      for(var x = i+1; x <=999; x++) {
        factorCheck = x*i;
        if(isPalindrome(factorCheck)) {
          factor_0 = i;
          factor_1 = x;
          factorsArr.push(factorCheck);
          console.log(factor_0,factor_1, factorCheck)
        }
      }
    }
  }

// palindromeNumber = factorsArr[factorsArr.length-1]
palindromeNumber = getMaxOfArray(factorsArr)


  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};


function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function isPalindrome(num) {
  numReversed = num.toString().split("").reverse(). join("")
  numReversed = Number(numReversed)
  if(num === numReversed) {
    return true;
  }else {
    return false;
  }
}