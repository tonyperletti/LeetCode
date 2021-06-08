/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function isPrime(num) {
    let num1 = num.toString(2);  //convert to binary
    let ones = 0; //keep count of number of ones in string
	
	//count the number of ones in string
    for(let j = 0; j< num1.length; j++){
        if(num1[j] === '1')
            ones++;
    }
	
    //check if number of ones is prime
    for(let i = 2; i < ones; i++)
      if(ones % i === 0) return false;
    return ones > 1;
}

var countPrimeSetBits = function(L, R) {
    let count = 0;
    for(;L <= R;){
        if(isPrime(L))
            count++;
        L++;
    }
    return count;
};