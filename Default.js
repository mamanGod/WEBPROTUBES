let username = document.getElementById("Uname-id");
let password = document.getElementById("P-id");
var formlogn = document.getElementById("formLogin-id");
var statusLogin = localStorage.getItem("statusLogin");

function login(){
    if(username.value == "" || password.value == ""){
        window.alert("Masukkan Password/Username !!")
    }else if(username.value == "Iqnaz" && password.value == "aa"){
        formlogn.action = "Dashboard_Login.html";
        localStorage.setItem("statusLogin", "true");
    }else{
        statusLogin = false;
        formlogn.action = "Dashboard.html";
        localStorage.setItem("statusLogin", "false");
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

