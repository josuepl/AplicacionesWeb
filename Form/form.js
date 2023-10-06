window.onload = function () {
 console.log("La pagina cargo correctamente");
 let nombre = document.getElementById('nombre');
 let edad = document.getElementById('edad');
}

function func(){
    console.log("Funciona");
    console.log(nombre.value);
    console.log(edad.value);
    let auxN = nombre.value;
    let auxE = edad.value;
    document.getElementById('p1').innerHTML = auxN;
    document.getElementById('p2').innerHTML = auxE;
}