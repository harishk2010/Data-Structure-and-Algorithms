let one = 'silent'
let two = "listen"
let obj=[]

const isAnagram = function (word1, word2) {

    if(word1.length!==word2.length) return false
    else{
        for(let i=0;i<word1.length;i++){
            obj[word1[i]]=(obj[word1[i]]|| 0)+1
            obj[word2[i]]=(obj[word2[i]]|| 0)-1
        }

        for(let keys of obj){
            if(obj[keys]!==0) return false
        }
        return true
    }
    

    
}

console.log(isAnagram(one,two))