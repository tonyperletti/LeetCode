/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    let sumA = 0, sumB = 0, result=[];
    for(let a of A) {
        sumA += a;
    }
    for(let b of B) {
        sumB += b;
    }
    let mean = (sumA + sumB) / 2;
    for(let i = 0; i < A.length; i++) {
        let t = sumA - A[i];
        let s = mean - t;
        if(B.indexOf(s) >= 0 && (sumB - s + A[i] == mean)) {
            result.push(A[i]);
            result.push(s);
            break;
        }
    }
    return result;
};