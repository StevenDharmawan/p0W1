function sittingArrangement(person, column) {
    if (column < 1) {
        return "Invalid number"
    }
    var newArray = []
    var tempArray = []
    var tempIndex = 0
    var arrayLength = person.length
    var mod = arrayLength % column
    if(mod) {
        newLength = arrayLength + (column - mod)
    } else {
        newLength = arrayLength
    }

    for(var i = 0; i < newLength; i++) {
        if(i >= arrayLength) {
            tempArray.push("Kursi Kosong")
        } else {
            tempArray.push(person[i])
        }
        tempIndex++
        if(tempIndex == column) {
            newArray.push(tempArray)
            tempIndex = 0
            tempArray = []
        }
    }
    return newArray
}

console.log("TEST CASES")
console.log(sittingArrangement(['A', 'B', 'C'], 0))
console.log(sittingArrangement(['Juli', 'Nisa', 'Desi', 'Ulfa', 'Puji'], 2))
console.log(sittingArrangement(['Yosia', 'Asrawi', 'Andru'], 3))
console.log(sittingArrangement(['Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion'], 4))
console.log(sittingArrangement(['Juvi'], 10))