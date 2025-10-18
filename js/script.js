num = 1

document.getElementById("aumento").innerHTML = num;

function aumentar() {
    num++;
    document.getElementById("aumento").innerHTML = num;
}
function disminuir() {
    if (num <=1){
        return
    }
    num--;
    document.getElementById("aumento").innerHTML = num;
}

function mostrarAlerta() {

    if (num <=0){
        alert("No se han añadido productos al carrito de compras")
        return;
    }
    alert("Se han añadido " +num+" a el carrito de compras"
    )

    location.reload();
}