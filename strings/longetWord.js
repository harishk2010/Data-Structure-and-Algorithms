let str="hellou i amsdfsdfdsf Harisdfh"
let arr=str.split(" ")
let longest=0
let longWord=''
for(let i of arr){

    if(i.length>longest){
        longest=i.length
        longWord=i
    }
}
console.log(longest, longWord)