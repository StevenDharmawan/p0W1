function targetTerdekat(arr) {
    var pointerO = 0
    var pointerX = 0
    var jumlahX = 0
    var total = 0
    var min 
    while(pointerX != arr.length) {
        if(arr[pointerO] != 'o') {
            pointerO++
        }

        if(arr[pointerX] != 'x') {
            pointerX++
        } else {
            jumlahX++
            if(pointerO < pointerX){
                total = pointerX - pointerO
            } else {
                total = pointerO - pointerX
            }

            if (min === undefined) {
                min = total
            }
            if(min > total){
                min = total
            }
            pointerX++
        }
    }
    if(jumlahX === 0) {
        return 0
    }
    return min
}

console.log("TEST CASES")
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x']))
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x']))
console.log(targetTerdekat(['X', ' ', ' ', ' ', 'X', 'x', 'o', ' ']))
console.log(targetTerdekat([' ', ' ', 'o', ' ']))
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x']))
