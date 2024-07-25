let one = [1, 2, 3]
let two = [4, 5, 6]
function catesian(one, two) {
    let final = []
    for (let i = 0; i < one.length; i++) {

        for (let j = 0; j < two.length; j++) {
            final.push([one[i], two[j]])
        }
        //final.push(temp)
    }
    return final
}

console.log(catesian(one, two))//Big-O(n^2)