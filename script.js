// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
document.getElementById("bloco-retorno").style.display = "none";

let resultado = document.getElementById("resultado");

function Criptografar() {
    let palavra = document.getElementById("palavra").value;
    if(Validacao(palavra)) {
        var palavraCriptografada = palavra.replaceAll("e", "enter");
        palavraCriptografada = palavraCriptografada.replaceAll("i", "imes");
        palavraCriptografada = palavraCriptografada.replaceAll("a", "ai");
        palavraCriptografada = palavraCriptografada.replaceAll("o", "ober");
        palavraCriptografada = palavraCriptografada.replaceAll("u", "ufat");

        resultado.value = palavraCriptografada;
        document.getElementById("bloco-retorno").style.display = "block";
        document.getElementById("bloco-estatico").style.display = "none";
        document.getElementById("copiado").style.background = "#EFF1FA";
    } else{
        alert("Somente letras minuscúlas, sem acento e sem caracteres especiais!");
    }
}
function Descriptografar() {
    var palavra = document.getElementById("palavra").value;
    if( Validacao(palavra)) {
        var palavraDescriptografada = palavra.replaceAll("ufat", "u");
        palavraDescriptografada = palavraDescriptografada.replaceAll("ober", "o");
        palavraDescriptografada = palavraDescriptografada.replaceAll("ai", "a");
        palavraDescriptografada = palavraDescriptografada.replaceAll("imes", "i");
        palavraDescriptografada = palavraDescriptografada.replaceAll("enter", "e");

        resultado.value = palavraDescriptografada;
        document.getElementById("bloco-retorno").style.display = "block";
        document.getElementById("bloco-estatico").style.display = "none";
        document.getElementById("copiado").style.background = "#EFF1FA";

    } else{
        alert("Somente letras minuscúlas, sem acento e sem caracteres especiais!");
    }
}
function Validacao(palavra) {
    //          a-z: aceita de a-z minúsculo
    //          \s: aceita espaço em branco
    var caracter = palavra.normalize("NFD").replace(/[^a-z\s]/g);
    return caracter === palavra;
}
function Copiar() {
    navigator.clipboard.writeText(resultado.value);
    document.getElementById("copiado").style.background = "limegreen";
    document.getElementById("copiado").innerText = "Copiado ";
}
function Limpar() {
    document.getElementById("palavra").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("bloco-estatico").style.display = "block";
    document.getElementById("bloco-retorno").style.display = "none";
}