/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    if(!root) return root;
    
    let queue = [root];
    while(queue.length){
        let current = queue.shift();
       if(current === null) continue;
        swap(current);
        queue.push(current.left);
        queue.push(current.right);

    }
    
    return root;
};

var swap= (tree)=>{
   let temp = tree.left;
    tree.left = tree.right;
    tree.right = temp;
    return tree;
}