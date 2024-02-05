function mengelompokkanAngka(arr) {
    var kelipatan3 = []
    var ganjil = []
    var genap = []
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 3 == 0) {
            kelipatan3.push(arr[i])
        } else if (arr[i] % 2 == 0) {
            genap.push(arr[i])
        } else {
            ganjil.push(arr[i])
        }
    }
    return arr = [genap, ganjil, kelipatan3]
}

console.log("TEST CASES")
console.log(mengelompokkanAngka([2, 4, 6]))
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(mengelompokkanAngka([100, 151, 122, 99, 111]))
console.log(mengelompokkanAngka([]))
