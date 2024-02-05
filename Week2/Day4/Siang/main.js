// Define Object Karyawan

function Karyawan(nama, jabatan, gaji) {
    this.nama = nama
    this.jabatan = jabatan
    this.gaji = gaji
}

Karyawan.prototype.tampilkanDetail = function(){
    return `${this.nama} - ${this.jabatan} - ${this.gaji}`
}

let daftarKaryawan = []

function tambahKaryawan(karyawan) {
    daftarKaryawan.push(karyawan)
}

function tampilkanKaryawan(){
    const ulElement = document.getElementById("daftar-karyawan")
    ulElement.innerHTML = "";

    daftarKaryawan.forEach(karyawan => {
        const liElement = document.createElement("li")
        liElement.textContent = karyawan.tampilkanDetail()
        ulElement.appendChild(liElement)
    })
}

function hapusKaryawan(nama){
    const index = daftarKaryawan.findIndex(k => k.nama === nama)
    if(index !== -1){
        daftarKaryawan.splice(index, 1)
    }
}

function cariKaryawan(tekst) {
    return daftarKaryawan.filter(k => k.nama.includes(tekst) || k.jabatan.includes(tekst))
}

document.getElementById("form-karyawan").addEventListener("submit", function(e){
    e.preventDefault()

    const nama = document.getElementById("input-nama").value
    const jabatan = document.getElementById("input-jabatan").value
    const gaji = document.getElementById("input-gaji").value

    const karyawan = new Karyawan(nama, jabatan, gaji)
    tambahKaryawan(karyawan)
    tampilkanKaryawan()

    document.getElementById("input-nama").value = ""
    document.getElementById("input-jabatan").value = ""
    document.getElementById("input-gaji").value = ""
})

function hapusTerpilih() {
    const nama = document.getElementById("input-nama").value
    hapusKaryawan(nama)
    tampilkanKaryawan()
}

function cariDanTampilkan(){
    const tekst = document.getElementById("input-cari").value
    const hasil = cariKaryawan(tekst)
    const ulElement = document.getElementById("daftar-karyawan")
    ulElement.innerHTML = ""

    hasil.forEach(karyawan => {
        const liElement = document.createElement("li")
        liElement.textContent = karyawan.tampilkanDetail()
        ulElement.appendChild(liElement)
    })
}