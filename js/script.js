function ampliar(myelem) {
    // window.alert("hola");
    let elem;
    elem = myelem;
    // elem = "hidrogeno";
    let contenido;
    let newclase;
    let oldclase;
    let temporal;
    temporal = document.getElementById(elem).getElementsByClassName("atname")[0];
    contenido = temporal.textContent;
    temporal = document.getElementById('amp_id').getElementsByClassName("atname")[0];
    temporal.innerHTML = contenido;
    temporal = document.getElementById(elem).getElementsByClassName("atsim")[0];
    contenido = temporal.textContent;
    temporal = document.getElementById('amp_id').getElementsByClassName("atsim")[0];
    temporal.innerHTML = contenido;
    temporal = document.getElementById(elem).getElementsByClassName("atmass")[0];
    contenido = temporal.textContent;
    temporal = document.getElementById('amp_id').getElementsByClassName("atmass")[0];
    temporal.innerHTML = contenido;
    temporal = document.getElementById(elem).getElementsByClassName("numat")[0];
    contenido = temporal.textContent;
    temporal = document.getElementById('amp_id').getElementsByClassName("numat")[0];
    temporal.innerHTML = contenido;
    oldclase = document.getElementById('amp_td').className;
    document.getElementById("amp_td").classList.remove(oldclase);
    newclase = document.getElementById(elem).className;
    document.getElementById("amp_td").classList.add(newclase);
    document.getElementById("modal").style.display= "block";
    // window.alert (oldclase);
    // window.alert (newclase);
}
// window.onload = function() {
// ampliar('h');
// }
function closeme(){
    document.getElementById("modal").style.display= "none";
}