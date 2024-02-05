// Pseudocode
/*
INIT r
STORE "phi" with CONST
STORE "r" with FLOAT
STORE "Luas" with FLOAT
STORE "Keliling" with FLOAT

CALCULATE "phi" times "r" times "r"
CALCULATE "phi" times "2" times "r"

SET "LUAS" value with calculation result
DISPLAY "LUAS"

SET "KELILING" value with calculation result
DISPLAY "KELILING"


======
TULIS "Masukkan R lingkaran : "
BACA R

TULIS PHI = 3.14

HITUNG luas = phi * r * r
HITUNG keliling = phi * 2 * R

TULIS hasil-luas
TULIS hasil-keliling
*/


/*
======Questions1======
BACA array A

TULIS angkaTerkecil = A[0]
TULIS index = 0

WHILE panjang array A
    IF A[0] < angkaTerkecil
        TULIS angkaTerkecil = A[0]
    MENAMBAHKAN index sebanyak 1
KEMBALIKAN angkaTerkecil
*/

/*
======Question2======
BACA array A
BACA target

FOR i = 0 sampai panjang A
    IF A[i] == target
        KEMBALIKAN i
KEMBALIKAN -1   
*/

/*
======Question3======
BACA harga
BACA kategori
IF kategori == "elektronik"
    KEMBALIKAN harga * 0.9
ELSE IF kategori == "pakaian" 
    KEMBALIKAN harga * 0.85
ELSE
    KEMBALIKAN harga
*/