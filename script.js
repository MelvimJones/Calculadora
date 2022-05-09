function insert(num) {
    var numero = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = numero + num;

}
function clean() {
    document.getElementById('tela').innerHTML = "";
}

function back() {
    var numero = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = numero.substring(0, numero.length - 1);
}

function calculo(num) {
    var numero = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = eval(numero,num)


}

