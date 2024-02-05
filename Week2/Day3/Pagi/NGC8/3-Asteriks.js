console.log("SOAL NOMOR 1")
var rows1 = 5
for(var i = 0; i < rows1; i++){
    console.log("*")
}

console.log("\nSOAL NOMOR 2")
var rows2 = 5
for(var i = 0; i < rows2; i++) {
    temp = ""
    for(var j = 0; j < rows2; j++){
        temp += "*"
    }
    console.log(temp)
}

console.log("\nSOAL NOMOR 3")
var rows3 = 5
for(var i = 0; i < rows3; i++) {
    var temp = ""
    for(var j = 0; j <= i; j++) {
        temp += "*"
    }
    console.log(temp)
}

console.log("\nSOAL NOMOR 4")
var rows4 = 5
for(var i = rows4; i >= 0; i--){
    var temp = ""
    for(var j = 0; j < i; j++){
        temp += "*"
    }
    console.log(temp)

}