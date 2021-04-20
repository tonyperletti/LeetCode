/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  let trailingZero = 0;
  while(m != n) {
    m >>= 1;
    n >>= 1;
    trailingZero++;
  }
  
  return m << trailingZero;
};