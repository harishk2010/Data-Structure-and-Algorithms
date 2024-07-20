let word1 = "abcdss"
let word2 = "pqrs"
let l = word1.length >= word2.length ? word1.length : word2.length
function merge(word1, word2) {
    let result = ""

    for (let i = 0; i < l; i++) {
        if (word1[i] && word2[i]) {

            result += word1[i] + word2[i]
        }
        else if (!word1[i]) {
            result += word2[i]
        } else {
            result += word1[i]
        }
    }

    return result
}

console.log(word1, word2)
console.log(merge(word1, word2))

// let arr = [22, 3, 4,5, 6]
// let largest = 0
// let second = 0
// for (let i = 0; i < arr.length; i++) {
//     if (largest < arr[i]) {
//         second = largest
//         largest = arr[i]
//     }else if(largest>arr[i] && arr[i]>second){
//         second=arr[i]
//     }
// }
// console.log(second,largest)

// let str='aabbccdd'
// str=str.split("")
// for(let i=0;i<str.length;i++){
//     if(str.indexOf(str[i])===str.lastIndexOf(str[i])){ console.log(str[i])}
//     else console.log("no unique")
// }
// console.log(second)