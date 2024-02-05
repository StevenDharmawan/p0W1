document.write("Hello FTGO RMT004! dari body")
document.getElementById("nama").innerHTML = "Nama Saya John Doe"

var nama = "John Doe"
var alamat = "Jakarta"
const phi = 3.14

document.getElementById("nama").innerHTML = nama
document.getElementById("alamat").innerHTML = alamat

var buah = ["Apel", "Jeruk", "Mangga", "Alpukat"]

document.getElementById("hasil").innerHTML = buah[1]

var mobil = {
    merk : "Honda",
    tahun : 2021,
    warna : "Hitam",
}

document.getElementById("hasil").innerHTML = `${mobil.merk} dibuat tahun ${mobil.tahun}, pilihan yang tersedia adalah ${mobil.warna}`

const bilangan1 = 6
const bilangan2 = 3

const penjumlahan = bilangan1 + bilangan2
const pengurangan = bilangan1 - bilangan2
const perkalian = bilangan1 * bilangan2
const pembagian = bilangan1 / bilangan2
const modulus = bilangan1 % bilangan2

document.getElementById("penjumlahan").innerHTML = penjumlahan
document.getElementById("pengurangan").innerHTML = pengurangan
document.getElementById("perkalian").innerHTML = perkalian
document.getElementById("pembagian").innerHTML = pembagian
document.getElementById("modulus").innerHTML = modulus


function tampilkan_kelas() {
    return "RMT 004"
}

document.getElementById("kelas").innerHTML = tampilkan_kelas()
