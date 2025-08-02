var greeting = document.getElementById("greeting");

var name = sessionStorage.getItem("name");

greeting.innerHTML = "Bem vindo " + name;