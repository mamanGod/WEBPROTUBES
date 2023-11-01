let username = document.getElementById("Uname-id");
let password = document.getElementById("P-id");
var formlogn = document.getElementById("formLogin-id");
var statusLogin = localStorage.getItem("statusLogin");
var statusAdmin = localStorage.getItem("statusAdmin");

function login(){
    if(username.value == "" || password.value == ""){
        window.alert("Masukkan Password/Username !!")
    }else if(username.value == "Iqnaz" && password.value == "aa"){
        formlogn.action = "Dashboard_Login.html";
        localStorage.setItem("statusLogin", "true");
        localStorage.setItem("statusAdmin", "false");
    }else if(username.value == "AlifAdmin" && password.value == "alif123"){
        window.alert("Anda Login Sebagai Admin")
        formlogn.action = "Dashboard.html";
        localStorage.setItem("statusLogin", "true");
        localStorage.setItem("statusAdmin", "true");
    }else{
        formlogn.action = "Dashboard.html";
        localStorage.setItem("statusLogin", "false");
        localStorage.setItem("statusAdmin", "false");
    }
}

function cekLogin(){
    if(statusLogin == "false"){
        window.alert("Harap Login untuk menggunakan fitur ini");
        return false;
    }else{
        return true;
    }
}

function cekAdmin(){
    var DropdownMenu = document.getElementById("dropdown");
    if(statusAdmin == "false"){
        DropdownMenu.style.display = 'none';
        return false;
    }
}
