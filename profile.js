/*
// Membuat referensi ke elemen tombol "Upload Gambar" dan "Hapus Gambar"
var uploadButton = document.getElementById("upload-image");
var deleteButton = document.getElementById("delete-image");

// Membuat referensi ke elemen gambar profil
var profileImage = document.getElementById("profile-image");
var ProfileImage = document.querySelector(".card-body img");

// Menambahkan event listener untuk tombol "Upload Gambar"
uploadButton.addEventListener("click", function() {
    // Membuat elemen input tipe file (file input)
    var fileInput = document.createElement('input');
    fileInput.type = 'file';

    // Menambahkan event listener saat pemilihan file selesai
    fileInput.addEventListener('change', function() {
        var file = fileInput.files[0]; // Mengambil file yang dipilih
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                // Mengganti gambar profil dengan gambar yang dipilih
                profileImage.src = e.target.result;
                ProfileImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Mengklik elemen input tipe file secara otomatis
    fileInput.click();
});
// JavaScript untuk mengontrol sidebar
let sidebarOpen = false;
const openSidebarButton = document.getElementById("open-sidebar");
const mySidebar = document.getElementById("mySidebar");
const containerShifted = document.querySelector(".container-shifted");

openSidebarButton.addEventListener("click", function () {
    if (!sidebarOpen) {
        mySidebar.style.width = "250px";
        containerShifted.style.marginLeft = "260px";
        openSidebarButton.style.marginLeft = "260px";
        sidebarOpen = true;
    } else {
        mySidebar.style.width = "0";
        containerShifted.style.marginLeft = "200px";
        openSidebarButton.style.marginLeft = "10px";
        sidebarOpen = false;
    }
});*/