const text = document.getElementById("text-hero")
const button = document.getElementById("btn-hero")

// fungsi klick ubah teks
button.addEventListener("click", () => {
    // text.innerHTML = "<p> Lets Go </p>"
    
    text.innerText = "Lets Go"

    // text.style.color = "green"
});

// form
const form = document.getElementById("form")
const nama = document.getElementById("nama")
const email = document.getElementById("email")
const textArea = document.getElementById("textArea")

const notifikasi = document.getElementById("notifikasi-text")

form.addEventListener("submit", function(e) {
    e.preventDefault()

    // ketika inputan kosong dia ngasi tau
    if (nama.value === "" && email.value === "" && textArea.value === "") {
        alert("ini kosong inputanya")
    }

    // ketika inputan diisi
    if (nama.value && email.value && textArea.value) {
        notifikasi.style.opacity = "1"
    }

    // ini akan menghilangkan notif setelah 3 detik
    setTimeout(() => {
        notifikasi.style.opacity = "0"
    }, 2000);

})
