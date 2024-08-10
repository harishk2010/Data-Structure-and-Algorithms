class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class bst{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertValue(this.root,node)
        }
    }
    insertValue(root,node){
        if(node.value<root.value){
            if(!root.left){
                root.left=node
            }else{
                return this.insertValue(root.left,node)
            }
        }else{
            if(!root.right){
                root.right=node
            }else{
                return this.insertValue(root.right,node)
            }
        }
       

    }
    search(root,value){
        if(!root){
            return false
        }else{
            if(value===root.value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }

    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    preOrder(root){
        if(!root){
            return false
        }else{
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    levelOrder(root){

        const queue=[]
        queue.push(root)
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
}

const tree=new bst()
console.log(tree.isEmpty());
tree.insert(16)
tree.insert(15)
tree.insert(5)
console.log(tree.search(tree.root,0));
console.log(tree.min(tree.root),"min<<>>max",tree.max(tree.root));
tree.levelOrder(tree.root)

