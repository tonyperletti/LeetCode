/**
 * @param {number} n
 * @return {number}
 */
function dgtSum(n) {
  var sum = 0;
  while (n) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

var countLargestGroup = function (n) {
  var dic = new Map();
  var max = 1;
  var count = 0;

  for (let i = 1; i <= n; i++) {
    var num = dgtSum(i);
    dic.set(num, dic.has(num) ? dic.get(num) + 1 : 1);
    max = Math.max(max, dic.get(num));
  }

  dic.forEach((v) => (v == max ? (count += 1) : count));

  return count;
};