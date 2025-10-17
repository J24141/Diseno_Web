num = 0

document.getElementById("aumento").innerHTML = num;

function aumentar() {
    num++;
    document.getElementById("aumento").innerHTML = num;
}
function disminuir() {
    num--;
    document.getElementById("aumento").innerHTML = num;
}

function mostrarAlerta() {
    alert("Se han añadido " +num+" a el carrito de compras"
    )
}