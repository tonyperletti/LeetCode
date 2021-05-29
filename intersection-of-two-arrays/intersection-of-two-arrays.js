/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersection = function(numa1, numa2) {
    let ans=[];
    let set = new Set();
    for(let i=0; i<numa2.length;i++){
        set.add(numa2[i]);
    }
    for(let j=0; j<numa1.length;j++){
        if(set.has(numa1[j])){
            ans.push(numa1[j]);
            set.delete(numa1[j]);
        }
    }
    return ans;
};