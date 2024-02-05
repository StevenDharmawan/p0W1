// TANPA BUILD IN FUNCTION LAIN SELAIN PUSH ==> KURANG CEPAT KARNA NESTED LOOP
// function ladder(word){
//     var newArray = []
//     var arrayLength = word.length
//     for(var i = 0; i < arrayLength; i++) {
//         var tempArray = []
//         for(var j = 0; j <= i; j++) {
//             tempArray.push(word[j])
//         }
//         newArray.push(tempArray)
//     }
//     return newArray
// }

// DENGAN BUILD IN FUNCTION .SLICE() KARNA ARRAY DI JAVASCRIPT PASS BY REFERENCE.
function ladder(word){
    var newArray = []
    var tempArray = []
    var arrayLength = word.length
    for(var i = 0; i < arrayLength; i++) {
        tempArray.push(word[i])
        newArray[arrayLength - i - 1] = tempArray.slice()
    }
    return newArray
}

console.log(ladder('developer'))
console.log(ladder('arnold'))