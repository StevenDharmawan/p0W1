// const isTrue = true
// const isFalse = false;

// if(isTrue) {
//     console.log("Kondisi Benar")
// } else {
//     console.log("Kondisi Salah")
// }

// console.log(true==1)
// console.log(false==0)

var nilai = prompt("Masukkan Nilai:")

nilai = parseFloat(nilai);

if(nilai >= 70) {
    document.write("Anda Lulus!")
} else if (nilai < 70) {
    document.write("Anda Belum Lulus!")
} else {
    document.write("Input Tidak Valid. Masukkan Angka yang Benar")
}