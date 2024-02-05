function luasKelilingLingkaran() {
    const r = parseFloat(document.getElementById("jarijari").value)
    const phi = 3.14
    const luas = phi * r * r
    const keliling = phi * r * 2

    document.getElementById("hasilLuas").textContent = luas.toFixed(2);
    document.getElementById("hasilKeliling").textContent = keliling.toFixed(2);
}