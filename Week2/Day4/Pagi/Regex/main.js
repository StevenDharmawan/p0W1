document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault()
    
    var email = document.getElementById("email").value
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(!emailPattern.test(email)) {
        document.getElementById("emailError").textContent="Alamat Email Tidak Valid"
    } else {
        document.getElementById("emailError").textContent=""
    }

    var date = document.getElementById("date").value
    var datePattern = /^\d{2}-\d{2}-\d{4}$/

    if(!datePattern.test(date)) {
        document.getElementById("dateError").textContent="Format Tanggal Salah"
    } else {
        document.getElementById("dateError").textContent=""
    }
})