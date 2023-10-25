window.onload = function (){
    enca = document.getElementById('titulo');
    imgU = document.getElementById('imgUrl');
    cont = document.getElementById('cont');
    pie = document.getElementById('pie');
}

function crear(){
    console.log("Crear");
    console.log(enca.value+" -- "+ imgP.value+" -- "+cont.value+" -- "+pie.value)
    cEnca = document.getElementById('enc');
    imgP = document.getElementById('imgP');
    txt = document.getElementById('txt2');
    foot = document.getElementById('foot');
    
    cEnca.innerHTML = enca.value;
    txt.innerHTML = cont.value;
    foot.innerHTML = pie.value;
    imgP.src = imgU.value;

}